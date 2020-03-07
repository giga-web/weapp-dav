const proxy = {};

proxy['GET /api/tags'] = (req, res) => {
  res.json({
    "code": 0,
    "message": "success",
    "data": {
        "list": [
            {
                "name": "上海市",
                "value": 80,
                "type": 0
            },
            {
                "name": "秦皇岛市",
                "value": 69,
                "type": 0
            },
            {
                "name": "通辽市",
                "value": 23,
                "type": 1
            },
            {
                "name": "白山市",
                "value": 96,
                "type": 2
            },
            {
                "name": "松原市",
                "value": 34,
                "type": 2
            },
            {
                "name": "台东县",
                "value": 59,
                "type": 2
            },
            {
                "name": "巴彦淖尔市",
                "value": 30,
                "type": 0
            },
            {
                "name": "重庆市",
                "value": 16,
                "type": 1
            },
            {
                "name": "北京市",
                "value": 72,
                "type": 1
            },
            {
                "name": "怀化市",
                "value": 72,
                "type": 2
            },
            {
                "name": "朝阳市",
                "value": 66,
                "type": 1
            },
            {
                "name": "台北市",
                "value": 93,
                "type": 0
            },
            {
                "name": "雅安市",
                "value": 58,
                "type": 1
            },
            {
                "name": "新乡市",
                "value": 69,
                "type": 0
            },
            {
                "name": "上海市",
                "value": 97,
                "type": 0
            },
            {
                "name": "安庆市",
                "value": 40,
                "type": 0
            },
            {
                "name": "天津市",
                "value": 34,
                "type": 2
            },
            {
                "name": "上海市",
                "value": 57,
                "type": 0
            },
            {
                "name": "张掖市",
                "value": 44,
                "type": 1
            },
            {
                "name": "日照市",
                "value": 13,
                "type": 2
            },
            {
                "name": "香港岛",
                "value": 77,
                "type": 2
            },
            {
                "name": "德州市",
                "value": 56,
                "type": 1
            },
            {
                "name": "嘉义市",
                "value": 87,
                "type": 0
            },
            {
                "name": "常州市",
                "value": 45,
                "type": 1
            },
            {
                "name": "梧州市",
                "value": 25,
                "type": 2
            },
            {
                "name": "果洛藏族自治州",
                "value": 52,
                "type": 1
            },
            {
                "name": "上海市",
                "value": 13,
                "type": 0
            },
            {
                "name": "东营市",
                "value": 38,
                "type": 2
            },
            {
                "name": "辽源市",
                "value": 96,
                "type": 0
            },
            {
                "name": "晋城市",
                "value": 49,
                "type": 0
            },
            {
                "name": "榆林市",
                "value": 14,
                "type": 1
            },
            {
                "name": "离岛",
                "value": 87,
                "type": 1
            },
            {
                "name": "贵阳市",
                "value": 50,
                "type": 0
            },
            {
                "name": "榆林市",
                "value": 7,
                "type": 1
            },
            {
                "name": "永州市",
                "value": 77,
                "type": 0
            },
            {
                "name": "温州市",
                "value": 26,
                "type": 2
            },
            {
                "name": "黔东南苗族侗族自治州",
                "value": 70,
                "type": 0
            },
            {
                "name": "安庆市",
                "value": 62,
                "type": 2
            },
            {
                "name": "台南市",
                "value": 55,
                "type": 0
            },
            {
                "name": "防城港市",
                "value": 51,
                "type": 1
            },
            {
                "name": "赣州市",
                "value": 50,
                "type": 1
            },
            {
                "name": "海口市",
                "value": 10,
                "type": 1
            },
            {
                "name": "朔州市",
                "value": 87,
                "type": 1
            },
            {
                "name": "舟山市",
                "value": 8,
                "type": 0
            },
            {
                "name": "天水市",
                "value": 29,
                "type": 0
            },
            {
                "name": "长沙市",
                "value": 93,
                "type": 2
            },
            {
                "name": "廊坊市",
                "value": 28,
                "type": 1
            },
            {
                "name": "天津市",
                "value": 46,
                "type": 0
            },
            {
                "name": "朔州市",
                "value": 96,
                "type": 2
            },
            {
                "name": "榆林市",
                "value": 22,
                "type": 0
            },
            {
                "name": "新界",
                "value": 56,
                "type": 2
            },
            {
                "name": "上海市",
                "value": 61,
                "type": 2
            },
            {
                "name": "常州市",
                "value": 51,
                "type": 0
            },
            {
                "name": "本溪市",
                "value": 92,
                "type": 2
            },
            {
                "name": "哈密地区",
                "value": 5,
                "type": 1
            },
            {
                "name": "牡丹江市",
                "value": 62,
                "type": 1
            },
            {
                "name": "咸阳市",
                "value": 36,
                "type": 2
            },
            {
                "name": "重庆市",
                "value": 32,
                "type": 1
            },
            {
                "name": "重庆市",
                "value": 74,
                "type": 1
            },
            {
                "name": "毕节市",
                "value": 93,
                "type": 1
            },
            {
                "name": "昌吉回族自治州",
                "value": 20,
                "type": 1
            },
            {
                "name": "嘉峪关市",
                "value": 19,
                "type": 1
            },
            {
                "name": "巴彦淖尔市",
                "value": 96,
                "type": 1
            },
            {
                "name": "包头市",
                "value": 7,
                "type": 1
            },
            {
                "name": "太原市",
                "value": 13,
                "type": 2
            },
            {
                "name": "咸阳市",
                "value": 35,
                "type": 1
            },
            {
                "name": "南平市",
                "value": 96,
                "type": 2
            },
            {
                "name": "晋中市",
                "value": 44,
                "type": 1
            },
            {
                "name": "北京市",
                "value": 75,
                "type": 1
            },
            {
                "name": "石嘴山市",
                "value": 40,
                "type": 2
            },
            {
                "name": "鹤岗市",
                "value": 26,
                "type": 1
            },
            {
                "name": "石嘴山市",
                "value": 91,
                "type": 0
            },
            {
                "name": "重庆市",
                "value": 92,
                "type": 0
            },
            {
                "name": "大理白族自治州",
                "value": 52,
                "type": 1
            },
            {
                "name": "眉山市",
                "value": 20,
                "type": 1
            },
            {
                "name": "郑州市",
                "value": 96,
                "type": 1
            },
            {
                "name": "九龙",
                "value": 96,
                "type": 1
            },
            {
                "name": "天水市",
                "value": 79,
                "type": 1
            },
            {
                "name": "恩施土家族苗族自治州",
                "value": 59,
                "type": 2
            },
            {
                "name": "六盘水市",
                "value": 64,
                "type": 2
            },
            {
                "name": "石嘴山市",
                "value": 64,
                "type": 2
            },
            {
                "name": "重庆市",
                "value": 73,
                "type": 1
            },
            {
                "name": "湖州市",
                "value": 73,
                "type": 2
            },
            {
                "name": "绍兴市",
                "value": 64,
                "type": 0
            },
            {
                "name": "齐齐哈尔市",
                "value": 25,
                "type": 0
            },
            {
                "name": "德阳市",
                "value": 86,
                "type": 0
            },
            {
                "name": "贺州市",
                "value": 88,
                "type": 2
            },
            {
                "name": "常州市",
                "value": 29,
                "type": 0
            },
            {
                "name": "南充市",
                "value": 70,
                "type": 2
            },
            {
                "name": "攀枝花市",
                "value": 57,
                "type": 1
            },
            {
                "name": "烟台市",
                "value": 52,
                "type": 1
            },
            {
                "name": "海外",
                "value": 80,
                "type": 1
            },
            {
                "name": "湖州市",
                "value": 12,
                "type": 2
            },
            {
                "name": "大同市",
                "value": 9,
                "type": 1
            },
            {
                "name": "韶关市",
                "value": 29,
                "type": 1
            },
            {
                "name": "荆门市",
                "value": 88,
                "type": 1
            },
            {
                "name": "榆林市",
                "value": 21,
                "type": 1
            },
            {
                "name": "澳门半岛",
                "value": 9,
                "type": 1
            },
            {
                "name": "三亚市",
                "value": 50,
                "type": 0
            },
            {
                "name": "漳州市",
                "value": 38,
                "type": 1
            }
        ]
    }
  });
}

module.exports = proxy;