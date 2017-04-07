//公司限额
function jsonData() {

    var data = [{
        "bankId": 1002, "bankName": "中国建设银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "slMoney":"2000000", "paymentDate": "2小时内到账","remarks":""},
                        {"singleLimitMoney": "50万/笔", "slMoney":"500000", "slMoney":"500000", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1003, "bankName": "中国工商银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "2小时内到账","remarks":""},
                        {"singleLimitMoney": "50万/笔", "slMoney":"500000", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1004, "bankName": "招商银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "2小时内到账","remarks":""},
                        {"singleLimitMoney": "50万/笔", "slMoney":"500000", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1005, "bankName": "中国农业银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "2小时内到账","remarks":""},
                         {"singleLimitMoney": "50万/笔", "slMoney":"500000", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1006, "bankName": "交通银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "工作日(9:00-17:00)2小时内到账；其他时间T+1日到账，遇节假日顺延；","remarks":""},
                        {"singleLimitMoney": "49990/笔", "slMoney":"49990", "slMoney":"49990", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1007, "bankName": "中国银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "2小时内到账","remarks":""},
                        {"singleLimitMoney": "49990/笔", "slMoney":"49990", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1008, "bankName": "兴业银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "工作日(9:00-17:00)2小时内到账；其他时间T+1日到账，遇节假日顺延；","remarks":""},
                        {"singleLimitMoney": "50万/笔", "slMoney":"500000", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1009, "bankName": "民生银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "2小时内到账","remarks":""},
                        {"singleLimitMoney": "49990/笔", "slMoney":"49990", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1010, "bankName": "中信银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "工作日(9:00-17:00)2小时内到账；其他时间T+1日到账，遇节假日顺延；","remarks":""},
                        {"singleLimitMoney": "49990/笔", "slMoney":"49990", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1011, "bankName": "光大银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "工作日(9:00-17:00)2小时内到账；其他时间T+1日到账，遇节假日顺延；","remarks":""},
            {"singleLimitMoney": "49990/笔", "slMoney":"49990", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1012, "bankName": "浦发银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "工作日(9:00-17:00)2小时内到账；其他时间T+1日到账，遇节假日顺延；","remarks":""},
                        {"singleLimitMoney": "49990/笔", "slMoney":"49990", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1013, "bankName": "广发银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "工作日(9:00-17:00)2小时内到账；其他时间T+1日到账，遇节假日顺延；","remarks":""},
                        {"singleLimitMoney": "49990/笔", "slMoney":"49990", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1014, "bankName": "华夏银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "工作日(9:00-17:00)2小时内到账；其他时间T+1日到账，遇节假日顺延；","remarks":""},
                        {"singleLimitMoney": "49990/笔", "slMoney":"49990", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1015, "bankName": "浙商银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "工作日(9:00-17:00)2小时内到账；其他时间T+1日到账，遇节假日顺延；","remarks":""},
                        {"singleLimitMoney": "49990/笔", "slMoney":"49990", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1016, "bankName": "渤海银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "工作日(9:00-17:00)2小时内到账；其他时间T+1日到账，遇节假日顺延；","remarks":""},
                        {"singleLimitMoney": "49990/笔", "slMoney":"49990", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1017, "bankName": "恒丰银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "工作日(9:00-17:00)2小时内到账；其他时间T+1日到账，遇节假日顺延；","remarks":""},
                        {"singleLimitMoney": "49990/笔", "slMoney":"49990", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1018, "bankName": "中国邮政储蓄银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "工作日(9:00-17:00)2小时内到账；其他时间T+1日到账，遇节假日顺延；","remarks":""},
                        {"singleLimitMoney": "49990/笔", "slMoney":"49990", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1018, "bankName": "中国邮政储蓄银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "工作日(9:00-17:00)2小时内到账；其他时间T+1日到账，遇节假日顺延；","remarks":""},
                {"singleLimitMoney": "49990/笔", "slMoney":"49990", "paymentDate": "2小时内到账","remarks":""}]
        }]},
        {
            "bankId": 1018, "bankName": "平安银行", "cardList": [{
            "cardName": "储蓄卡",
            "infoList": [{"singleLimitMoney": "200万/笔", "slMoney":"2000000", "paymentDate": "2小时内到账","remarks":""},
                        {"singleLimitMoney": "49990/笔", "slMoney":"49990", "paymentDate": "2小时内到账","remarks":""}]
        }]}];

    return data;

}