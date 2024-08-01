export function sidebarSettings() {
  return [
    {
      items: [
        { text: "修订说明", link: "/changelog" },
        {
          text: "Q0：本篇指南内容涉及哪些方面？主要面向对象是谁？",
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
          link: "/study/course-selection",
        },
      ],
    },
  ];
}
