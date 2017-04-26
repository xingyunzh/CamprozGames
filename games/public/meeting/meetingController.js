/**
 * Created by admin on 06/04/17.
 */

var testData = {
    "name": "albert",
    "version": "0.0.1",
    "people":[
        {
            "name":"Marry",
            "role":"NBC Manager"
        },
        {
            "name":"Chris",
            "role":"NBC Director"
        },
        {
            "name":"Edwin",
            "role":"NBC Engineer"
        },
        {
            "name":"Sam",
            "role":"Sales",
            "required":1
        },
        {
            "name":"Philip",
            "role":"Project Manager"
        },
        {
            "name":"Amy",
            "role":"Architect"
        },
        {
            "name":"Dick",
            "role":"Engineer"
        },
        {
            "name":"Dean",
            "role":"Engineer"
        },
        {
            "name":"Terry",
            "role":"Tester"
        }
    ],
    "script":[
        {
            "seq":1,
            "who":"Sam",
            "say":"你好Marry，很高兴见到你！"
        },
        {
            "seq":2,
            "who":"Marry",
            "say":"你好Sam，你们很准时哦:)"
        },
        {
            "seq":3,
            "who":"Marry",
            "say":"请允许我介绍，Chris先生是我们公司创意部的总监。Edwin先生是我们公司的产品工程师。"
        },
        {
            "seq":4,
            "who":"Sam",
            "say":"Chris您好，久闻您大名。Edwin你好，很高兴认识你。"
        },
        {
            "seq":5,
            "who":"Sam",
            "say":"请允许我介绍,",
            "condition":{
                "type":"people",
                "Philip":"Philip是我们的项目经理",
                "Amy":"Amy是我们的架构师",
                "Dean":"Dean是研发工程师",
                "Dick":"Dick是研发工程师",
                "Terry":"Terry是我们的测试工程师"
            }
        },
        {
            "seq":6,
            "branch":"missing",
            "people": [
                {
                    "name": "Philip",
                    "go": 7
                },
                {
                    "name": "default",
                    "go": 9
                }
            ]
        },
        {
            "seq":7,
            "who":"Chris",
            "say":"你们项目组谁是负责人，项目经理来了没有？"
        },
        {
            "seq":8,
            "who":"Sam",
            "say":"非常抱歉，路上塞车，他一会就到（打电话中…）",
            "end":1
        },
        {
            "seq":9,
            "who":"Chris",
            "say":"欢迎你们，请坐！"
        },
        {
            "seq":10,
            "who":"Sam",
            "say":"让我们来聊聊您的项目吧",
            "milestone":"开场白结束"
        },
        {
            "seq":11,
            "who":"Marry",
            "say":"我们的业务涉及很广，希望贵公司能同我们合作研制一套“商务名片系统”。"
        },
        {
            "seq":12,
            "who":"Marry",
            "say":"希望这个系统能让我们很方便的将纸质名片电子化，进而互联网和VR技术丰富名片信息，最好是还能做一些商务分析。"
        },
        {
            "seq":13,
            "who":"Chris",
            "say":"Marry的这个项目，对于我们的业务很重要，经费都不是问题，你们是这方面的专家，请你们提供方案。"
        },
        {
            "seq":14,
            "who":"Philip",
            "say":"谢谢Chris，不敢当，不过我们在互联网和VR技术方面，确实做过不少的成功案例。"
        },
        {
            "seq":15,
            "branch":"choose",
            "options":[
                {
                    "who":"Philip",
                    "say":"麻烦请您细说一下关于互联网和VR的部分，您期待如何使用这个系统呢?",
                    "go":18
                },
                {
                    "who":"Philip",
                    "say":"麻烦详细说下纸质名片电子化功能，希望具体电子化到什么程度，什么数据格式呢？",
                    "go":16
                },
                {
                    "who":"Philip",
                    "say":"商务数据分析这块，我们也很在行，您们希望做哪些方面的分析呢？",
                    "go":17
                }
            ]
        },
        {
            "seq":16,
            "who":"Marry",
            "say":"数据格式，你们是专家，由你们来提议吧"
        },
        {
            "seq":17,
            "who":"Marry",
            "say":"哦，那个是后一步的功能，之后我们可以再详聊。"
        },
        {
            "seq":18,
            "who":"Marry",
            "say":"您问到重点了。这块是我们的核心功能，也是区别于当前市场上其他产品之处。"
        },
        {
            "seq":19,
            "who":"Marry",
            "say":"我们希望业务人员可以通过自己的手机识别客户的名片，然后通过互联网后台能自动的获得名片信息。"
        },
        {
            "seq":20,
            "who":"Marry",
            "say":"同时如果后台有合适的参考信息的话，业务人员也能在手机上看到，以VR的形式展现。"
        },
        {
            "seq":21,
            "who":"Marry",
            "say":"技术上能实现吗？"
        },
        {
            "seq":22,
            "branch":"exist",
            "people": [
                {
                    "name:": "Amy",
                    "go": 30
                },
                {
                    "name": "Dean",
                    "go": 25
                },
                {
                    "name": "default",
                    "go": 23
                }

            ]
        },
        {
            "seq":23,
            "who":"Philip",
            "say":"对不起，今天我们的技术负责人没来。我们可以先把需求整理下带回去。"
        },
        {
            "seq":24,
            "who":"Marry",
            "say":"哦 好的 如果可以的话，请尽快告诉我们结果。",
            "end":1
        },
        {
            "seq":25,
            "who":"Philip",
            "say":"Dean， Dick你们怎么看？"
        },
        {
            "seq":26,
            "who":"Dean",
            "say":"不好做，怎么把图片转成文字呢？"
        },
        {
            "seq":27,
            "who":"Dick",
            "say":"可以做没问题，不就是个信息存储和查询的系统吗。"
        },
        {
            "seq":28,
            "who":"Marry",
            "say":"看来，是既有信心，又有难度哦 呵呵"
        },
        {
            "seq":29,
            "who":"Chris",
            "say":"行，你们先回去调研下，拿个意见出来，今天就先到这？",
            "end":1
        },
        {
            "seq":30,
            "branch":"choose",
            "options":[
                {
                    "who":"Amy",
                    "say":"我能看到技术难点主要在文字识别，和后台的信息分析与推荐上。这方面我们也有过一些经验。",
                    "go":31
                },
                {
                    "who":"Amy",
                    "say":"技术难点主要是文字识别，以及数据分析。我们可以去找找一些开源的实现，包一层就可以了，他们也做的很不错的。",
                    "go":31
                },
                {
                    "who":"Amy",
                    "say":"技术上应该是可行的的，但我们没有能力做图像识别和大数据分析啊。太专业了。不过，我们可以试一下。",
                    "go":31
                }
            ]
        },
        {
            "seq":31,
            "branch":"choose",
            "options":[
                {
                    "who":"Amy",
                    "say":"总体来说，我们是可以做的。关于VR产品的具体细节，以及数据分析的业务规则，我想再找个时间深入的了解下，可以吗?",
                    "go":32
                },
                {
                    "who":"Amy",
                    "say":"VR部分，你们希望用3D的技术显示写什么信息？需要旋转动画吗？后台数据分析那块，都有哪些具体的规则？",
                    "go":32
                },
                {
                    "who":"Amy",
                    "say":"Marry，我们回去会针对这些难点来进行攻关，你对VR技术效果，以及后台业务规则熟悉吗？我们回头有问题，问你可以吗？",
                    "go":32
                }
            ]
        },
        {
            "seq":32,
            "who":"Marry",
            "say":"具体的技术需求，你们可以联系Edwin，他也做过这方面的一些调研。"
        },
        {
            "seq":33,
            "who":"Marry",
            "say":"你们还有其他的问题吗？"
        },
        {
            "seq":34,
            "branch":"choose",
            "options":[
                {
                    "who":"Philip",
                    "say":"项目周期大概多久？",
                    "go":36
                },
                {
                    "who":"Philip",
                    "say":"项目的预算规模大概多大？",
                    "go":36
                },
                {
                    "who":"Philip",
                    "say":"你们大概需要我们出多少人力参与这个项目？",
                    "go":35
                }
            ]
        },
        {
            "seq":35,
            "who":"Marry",
            "say":"我们希望你们能把最好的人放到这个项目上来。"
        },
        {
            "seq":36,
            "who":"Chris",
            "say":"Chris：我们有足够的资金，支持这个项目，如果一期开发顺利，后面会一直有新的需求要实现。我们希望三四个月左右能够出来一个可用的原型来评估。"
        },
        {
            "seq":37,
            "branch":"choose",
            "options":[
                {
                    "who":"Philip",
                    "say":"好的，下一步我们回去整理下，尽快把方案提交给你们。",
                    "go":38
                },
                {
                    "who":"Philip",
                    "say":"好的，下一步我们回去做一些技术调研，然后告诉你们结果。",
                    "go":38
                },
                {
                    "who":"Philip",
                    "say":"好的，我们回去研究下，准备项目应答书，和原型阶段报价。",
                    "go":38
                }
            ]
        },
        {
            "seq":38,
            "who":"Marry",
            "say":"我们希望你们能把最好的人放到这个项目上来。"
        },
        {
            "seq":39,
            "who":"Chris",
            "say":"非常好。Marry负责的这个项目，对我们公司非常重要。商务上，我们会按照正规流程走。期待你们的参与。"
        },
        {
            "seq":40,
            "who":"Sam",
            "say":"谢谢你们的时间，后续的进展我们随时保持联系，再见！",
            "end":1
        }
    ],
    "quiz":{
        "judge" : [
            {
                "seq":1,
                "sentence":"Edwin是本次会谈中客户方最大的boss",
                "truth":0
            },
            {
                "seq":2,
                "sentence":"Marry是Chris的上司",
                "truth":0
            },
            {
                "seq":3,
                "sentence":"该项目客户方的具体负责人是Marry",
                "truth":1
            },
            {
                "seq":4,
                "sentence":"该项目技术难点主要是图像文字识别和后台数据分析",
                "truth":1
            },
            {
                "seq":5,
                "sentence":"该项目的目标系统就是一个由手机识别名片，并集中保存到服务器上的应用。",
                "truth":0
            },
            {
                "seq":6,
                "sentence":"架构师应该询问下，手机上是不是要iOS和android平台都做，要不要支持平板电脑。",
                "truth":1
            },
            {
                "seq":7,
                "sentence":"架构师应该询问下客户对于系统性能方面的要求。",
                "truth":0
            },
            {
                "seq":8,
                "sentence":"架构师应该询问下这个应用最终会部署到哪里，部署环境对技术方案有没有什么限制和制约。。",
                "truth":0
            }
        ]



    }
}

app.controller("meetingController", ["$scope", "$rootScope", "$stateParams", "conversationPlayer",
    function ($scope, $rootScope, $stateParams, conversationPlayer) {
        $scope.id = $stateParams.meetingId;
        $rootScope.navBar.title = "初次拜访";
        $scope.text = "Ready";
        $scope.items = null;
        $scope.textFromItem = conversationPlayer.textFromItem;

        conversationPlayer.sceneData = JSON.stringify(testData);
        conversationPlayer.userData.people = ["Amy", "Philip", "Dean", "Dick"]

//        $scope.handleTestClick = function () {
//            if(conversationPlayer.isPlaying){
//                conversationPlayer.stop();
//            }
//            else {
//                conversationPlayer.play({}, function () {
//                    console.log("conversation interval")
//                })
//            }
//        };

        $scope.handleNext = function(){
            var ret = conversationPlayer.next();
            if(angular.isArray(ret)){
                $scope.items = ret;
                $scope.text = "分支";
            }
            else {
                $scope.items = null;
                $scope.text = ret;
            }
        };

        $scope.handleChoose = function(item){
            conversationPlayer.handleChoose(item);
            $scope.handleNext();
        }

    }]);