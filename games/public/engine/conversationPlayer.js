/**
 * Created by admin on 26/04/17.
 */
app.service("conversationPlayer", ["$interval", function($interval){
    this.state = "ready";
    this.sceneData = null;
    this.frameAction = null;
    this.seq = 0;
    this.userData = {people:[], records:[], choice:[], quiz:[]};
    this.text = "Ready";

    this.isPlaying = function(){
        return this.state != "ready";
    };

//    this.timer = null;
//
//    this.play = function(scene, doFrame){
//        this.state = "playing";
//
//        this.sceneData = scene;
//        this.frameAction = doFrame;
//
//        createTimer();
//    };
//
//    this.stop = function(){
//        deleteTimer();
//        this.state = "ready";
//        this.sceneData = null;
//        this.frameAction = null;
//        this.seq = 0;
//    };
//
//
//    this.pause = function(){
//        deleteTimer(this);
//        this.state = "paused";
//    };
//
//    this.resume = function(){
//        createTimer(this);
//    };
//
//    function createTimer(that) {
//        that.timer = $interval(function () {
//            that.frameAction()
//        }, 2000);
//    }
//
//    function deleteTimer(that) {
//        $interval.cancel(that.timer);
//        that.timer = null;
//    }

    this.next = function(){
        return eatSequence(this);
    };

    this.handleChoose = function(item){
        this.userData.choice.push({seq:this.req, item:item});
        this.seq = item.go;
        return eatSequence(this);
    };

    this.handleRecord = function() {
        if(this.userData.records.contain(this.seq)){
           return;
        }

        this.userData.records.push(this.seq);
    };

    function eatSequence(that){
        var index = that.seq;
        var json = JSON.parse(that.sceneData);
        var seqs = json.script;
        var sentence = seqs[index];
        if(sentence == null){
            console.log("user data = " + JSON.stringify(that.userData));
            return "Over";
        }

        var ret = checker(sentence, that.userData);
        if(ret.go){
            that.seq = ret.go;
            var text = that.textFromItem(ret)
            if(text != null){
                return text;
            }
            else {
                return eatSequence.call(this, that);
            }
        }
        else if(angular.isArray(ret)){
            return ret; //options
        }
        else {
            that.seq += 1;
            return that.textFromItem(ret);
        }
    }

    function checker(sentence, userData){
        if (sentence.branch == "missing") {
            for(var i = 0; i < sentence.people.length; i++){
                var item = sentence.people[i];
                if(item.name == "default" || !userData.people.includes(item.name)) {
                    return item;
                }
            }

            assert(false);
        }
        else if (sentence.branch == "exist") {
            for(var i = 0; i < sentence.people.length; i++){
                var item = sentence.people[i];
                if(item.name == "default" || userData.people.includes(item.name)) {
                    return item;
                }
            }

            assert(false);
        }
        else if (sentence.branch == "choose"){
            return sentence.options;
        }
        else {
            return sentence;
        }
    }

    this.textFromItem = function(item){
        if(item.who && item.say){
            return item.who + ":" + item.say;
        }
        else {
            return null;
        }
    }

}]);