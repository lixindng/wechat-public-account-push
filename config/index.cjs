/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx070bffc7dded63df',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '65a34b0b61feae05a537ed2e2414963f',

  PROVINCE: '山东',
  CITY: '聊城',

  USERS: [
    {
      // 想要发送的人的名字
      name: '倩宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obv9j6ue9bUPdEuSFOzyMYoy7iuA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '	1txDcNOVKuRWT6ZDDVIY6oziJkBInqo0Eib0UDwEMUQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-06',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '倩宝', year: '1997', date: '08-06',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '老公', year: '1996', date: '12-21',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '10-15',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-15' }
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'dKKrrrIzGs6anf6KlBTUBF6gFwphGW8KAMSfzomDQV4',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obv9j6sc1jfbhlLXGelQ6qH1siuU',
    }
  ],

}

module.exports = USER_CONFIG

