export function sidebarSettings() {
  return [
    {
      items: [{ text: "修订说明", link: "/changelog" }],
    },
    {
      items: [
        {
          text: "Q0. 本篇指南内容涉及哪些方面？主要面向对象是谁？",
          link: "/foreword",
        },
      ],
    },
    {
      text: "录取入学篇",
      collapsed: true,
      items: [
        {
          text: "Q1. 如何查询我是否已经被录取了？",
          link: "/admission/query-admission-status",
        },
        {
          text: "Q2. 我在确认被录取后是否应该加入学校的迎新群？怎么加入？",
          link: "/admission/orientation-group",
        },
        {
          text: "Q3. 学校的男女比例是怎么样的？",
          link: "/admission/gender-ratio",
        },
        {
          text: "Q4. 进入大学前，我该如何选购电子设备？",
          link: "/admission/choose-device",
        },
        {
          text: "Q5. 新生入学在哪一个校区？",
          link: "/admission/campus",
        },
        {
          text: "Q6. 学校的宿舍是什么样的？床铺尺寸是什么样的？",
          link: "/admission/dormitory",
        },
        {
          text: "Q7. 我想在报到前向学校邮寄一部分东西，我该怎么填写收货地址？",
          link: "/admission/shipping-address",
        },
        {
          text: "Q8. 我进入大学后应该关注学校的公众号吗？需要下载什么APP吗？",
          link: "/admission/wechat-official-accounts-and-apps",
        },
        {
          text: "Q9.学校有食堂吗？食堂怎么样？有什么推荐的美食？",
          link: "/admission/canteen",
        },
        {
          text: "Q10.新生入学有摸底考试吗？考不好会影响我后续的学习吗？",
          link: "/admission/placement-tests",
        },
        {
          text: "Q11. 如何访问校内网站？",
          link: "/admission/vpn",
        },
        {
          text: "Q12. 什么时候安排军训？",
          link: "/admission/military-training",
        },
        {
          text: "Q13.怎么从火车站/机场到学校报道？有人带着我们参观校园吗？",
          link: "/admission/transportation",
        },
        {
          text: "Q14. 学校内有超市吗？学校的周边有日常生活用品售卖吗？",
          link: "/admission/supermarket",
        },
        {
          text: "Q15. 为什么我进入学校后，有这么多自称市场营销专业的大三大四学姐向我推销笔？",
          link: "/admission/anti-fraud",
        },
        {
          text: "Q16. 学校的校园网怎么连接？需要办理校园卡吗？",
          link: "/admission/internet",
        },
        {
          text: "Q17. 我的笔记本怎么有线连接校园网？宿舍应该使用路由器吗？",
          link: "/admission/router",
        },
        {
          text: "Q18. 同一个上网账户最多同时可以连接多少个设备？",
          link: "/admission/maximum-devices",
        },
        {
          text: "Q19. 学校的日常作息是怎么样的？",
          link: "/admission/daily-schedule",
        },
        {
          text: "Q20. 学校有没有表白墙？",
          link: "/admission/love-wall",
        },
        {
          text: "Q21. 如果对学校有意见/投诉，我该怎么进行反馈？",
          link: "/admission/complaint",
        },
      ],
    },
    {
      text: "学习生活篇",
      collapsed: true,
      items: [
        {
          text: "Q22. 我该怎么努力保研？挂科了还能保研吗？",
          link: "/study/graduate-recommendation",
        },
        {
          text: "Q23. 学分绩是怎样进行计算的？",
          link: "/study/gpa",
        },
        {
          text: "Q24. 综测是什么？有什么用？怎么加综测分？",
          link: "/study/comprehensive-evaluation",
        },
        {
          text: "Q25. 选课机制是怎样的？",
          link: "/study/course-selection-rules",
        },
        {
          text: "Q26. 选课的意愿值是怎么进行计算的？",
          link: "/study/casino",
        },
        {
          text: "Q27. 选课应该遵循什么原则？",
          link: "/study/course-selection-principle",
        },
        {
          text: "Q28. 我有一门课没能选上，怎么进行补选？应该去哪里找到老师的联系方式？",
          link: "/study/course-selection-fail",
        },
        {
          text: "Q29. 我有转专业的想法，大一应该怎么选课？按哪个专业的培养方案来选择？",
          link: "/study/course-selection-change-major",
        },
        {
          text: "Q30. 什么时候可以进行课程退课？",
          link: "/study/drop-course",
        },
        {
          text: "Q31. 上课所用的课本应该到哪里去买？",
          link: "/study/textbook",
        },
        {
          text: "Q32. 课程有安排期中期末考试吗？",
          link: "/study/exam",
        },
        {
          text: "Q33. 我该怎么获得往年试题（复习资料）？",
          link: "/study/past-exam",
        },
        {
          text: "Q34. 老师在课程结束的时候会画重点吗？",
          link: "/study/important-points",
        },
        {
          text: "Q35. 考试之前有考前答疑吗？",
          link: "/study/office-hours",
        },
        {
          text: "Q36. “网课”是什么？没有按时完成学习（考试）会挂科吗？",
          link: "/study/online-course",
        },
        {
          text: "Q37. 我为什么没能找到网课在哪里学习？",
          link: "/study/online-course-location",
        },
        {
          text: "Q38. 请问缓考有平时分吗？会影响绩点吗？",
          link: "/study/deferred-exam",
        },
        {
          text: "Q39. 请问补考通过了还算挂科吗，补考通过之后绩点怎么计算呢？",
          link: "/study/make-up-exam",
        },
        {
          text: "Q40. 请问重修之后绩点有影响吗？",
          link: "/study/re-take",
        },
        {
          text: "Q41. 我可以随意修读中级以上体育课程吗？",
          link: "/study/advanced-pe",
        },
        {
          text: "Q42. 体育课的成绩组成是怎样的？体育课成绩与体测成绩有关联吗？",
          link: "/study/pe",
        },
        {
          text: "Q43. 学校怎么安排体测？",
          link: "/study/pe-exam",
        },
        {
          text: "Q44. 学校的跑步打卡是什么意思？需要刷脸吗？",
          link: "/study/running",
        },
        {
          text: "Q45. 体测不及格怎么办？体测不及格对绩点有影响吗？还能保研吗？",
          link: "/study/pe-fail",
        },
        {
          text: "Q46. 体育理论考试在什么时候进行？难吗？",
          link: "/study/pe-theory-exam",
        },
        {
          text: "Q47. 早/晚自习定要上吗？",
          link: "/study/self-study",
        },
        {
          text: "Q48. 志愿时长是什么？重要吗？在哪里刷？",
          link: "/study/volunteer",
        },
        {
          text: "Q49. 我在大学应该怎么入党入团呀？",
          link: "/study/party",
        },
        {
          text: "Q50. 怎么样我才能拿到奖学金呢？",
          link: "/study/scholarship",
        },
        {
          text: "Q51. 夏季学期是什么？我应该选课参加吗？",
          link: "/study/summer-term",
        },
        {
          text: "Q52. 转专业和大类分流在什么时候进行？是否会重新分配行政班？是否会重新更换宿舍？",
          link: "/study/change-major",
        },
        {
          text: "Q53. 什么时候可以转专业？转专业有什么具体要求吗？往年多少绩点可以转到我心仪的专业？",
          link: "/study/change-major-requirements",
        },
      ],
    },
    {
      text: "学生社团篇",
      collapsed: true,
      items: [
        {
          text: "Q54. 大学中班委有什么用？我应该报名担任班委吗？",
          link: "/organization/class-committee",
        },
        {
          text: "Q55. 我怎么加入学生会（社团）？学生会（社团）可以加入多个吗？",
          link: "/organization/student-union",
        },
        {
          text: "Q56. 我可以从哪里找到社团的相关信息？",
          link: "/organization/club-information",
        },
      ],
    },
    {
      text: "日常生活篇",
      collapsed: true,
      items: [
        {
          text: "Q57. 常去的教学区域在哪里？",
          link: "/life/teaching-area",
        },
        {
          text: "Q58. 学校什么时候供应热水？",
          link: "/life/bath-water",
        },
        {
          text: "Q59. 学校的水电费、网费的收费模式是怎么样的？",
          link: "/life/utility-bill",
        },
        {
          text: "Q60. 宿舍有限电吗？可以使用大功率电器吗？",
          link: "/life/electricity",
        },
        {
          text: "Q61. 宿舍可以安装洗衣机吗？？",
          link: "/life/launderette",
        },
        {
          text: "Q62. 一卡通丢失怎么办？在哪里可以补办吗？",
          link: "/life/card-loss",
        },
        {
          text: "Q63. 学校内部可以点外卖吗？",
          link: "/life/delivery",
        },
        {
          text: "Q64. 学校内部的快递点在哪里？",
          link: "/life/express",
        },
        {
          text: "Q66. 学校内有体育馆吗？常见的体育场所分布在哪里？",
          link: "/life/sports",
        },
        {
          text: "Q67. 学校的图书馆在哪？借阅图书的流程是什么？需要办理借书证吗？",
          link: "/life/library",
        },
        {
          text: "Q68. 学校哪里可以进行自习？",
          link: "/life/self-study-room",
        },
        {
          text: "Q69. 学校里面有猫吗？",
          link: "/life/cats",
        },
        {
          text: "Q70. 学校附近哪里方便就医？可以用医保报销吗？",
          link: "/life/medical",
        },
        {
          text: "Q71. 校医院可以进行验光吗？",
          link: "/life/optometry",
        },
        {
          text: "Q72. 学校周边有哪些推荐的娱乐场所、饭馆？",
          link: "/life/entertainment",
        },
        {
          text: "Q73. 学校附近有什么好玩的地方？",
          link: "/life/tourism",
        },
        {
          text: "Q74. 我怎么报名参加学校的一些活动？",
          link: "/life/events",
        },
        {
          text: "Q75. 我的身份证到期了怎么办？",
          link: "/life/id-card",
        },
        {
          text: "Q76. 如何找一个男朋友/女朋友？",
          link: "/life/romance",
        },
        {
          text: "Q77. 如何处理无法挽回的破碎的宿舍关系？怎么更换你的宿舍？怎么让别人更换宿舍？",
          link: "/life/dormitory-relationship",
        },
      ],
    },
    {
      text: "学科竞赛篇",
      collapsed: true,
      link: "/contest/",
      items: [
        {
          text: "Q78. “基地”是什么？我没有基础可以报名吗？",
          link: "/contest/base",
        },
        {
          text: "Q79. “四六级”什么时候考试？大一学生可以报名吗？",
          link: "/contest/cet",
        },
        {
          text: "Q80. 普通话等级考试”什么时候进行？",
          link: "/contest/putonghua",
        },
        {
          text: "Q81. “大创”是什么？大一学生可以参加吗？",
          link: "/contest/dachuang",
        },
        {
          text: "Q82. “萌创”是什么？大一学生可以参加吗？",
          link: "/contest/mengchuang",
        },
        {
          text: "Q83. 英语竞赛是什么？怎么报名参加？",
          link: "/contest/neccs",
        },
        {
          text: "Q84. “互联网+”是什么？",
          link: "/contest/internet-plus",
        },
        {
          text: "Q85. 大学生数学竞赛是什么？",
          link: "/contest/math",
        },
        {
          text: "Q86. 大学生数学建模竞赛是什么？学校有校赛吗？",
          link: "/contest/math-modeling",
        },
        {
          text: "Q87. “三航杯”是什么？",
          link: "/contest/sanhang-cup",
        },
      ],
    },
    {
      text: "出行交通篇",
      collapsed: true,
      items: [
        {
          text: "Q88. 长安校区有哪些大门（出口）？",
          link: "/transportation/gate",
        },
        {
          text: "Q89. 从学校前往市区的常见交通方式？",
          link: "/transportation/methods",
        },
        {
          text: "Q90. 怎么乘坐校车？校车的停靠点在哪里？",
          link: "/transportation/bus",
        },
        {
          text: "Q91. 校门口的到处拉人的车可以乘坐吗？贵吗？不想乘坐会不会生拉硬拽？",
          link: "/transportation/black-taxi",
        },
        {
          text: "Q92. 高铁购买学生票的流程是怎么样的？便宜多少钱？",
          link: "/transportation/train-discount",
        },
        {
          text: "Q93. 从长安校区前往西安站/西安北站有哪些乘车路线?",
          link: "/transportation/train-station",
        },
        {
          text: "Q94. 本科生在读证明如何办理？",
          link: "/transportation/proof",
        },
      ],
    },
    {
      items: [{ text: "最后的几点提醒", link: "/warning" }],
    },
    {
      items: [{ text: "鸣谢", link: "/credits" }],
    },
    {
      items: [{ text: "附件", link: "/attachment" }],
    },
  ];
}
