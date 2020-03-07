const proxy = {};

proxy['GET /api/fake_chart_data'] = (req, res) => {
  res.json({
    "code": 0,
    "message": "success",
    "data": {
        "visitData": [
            {
                "x": "2020-01-23",
                "y": 7
            },
            {
                "x": "2020-01-24",
                "y": 5
            },
            {
                "x": "2020-01-25",
                "y": 4
            },
            {
                "x": "2020-01-26",
                "y": 2
            },
            {
                "x": "2020-01-27",
                "y": 4
            },
            {
                "x": "2020-01-28",
                "y": 7
            },
            {
                "x": "2020-01-29",
                "y": 5
            },
            {
                "x": "2020-01-30",
                "y": 6
            },
            {
                "x": "2020-01-31",
                "y": 5
            },
            {
                "x": "2020-02-01",
                "y": 9
            },
            {
                "x": "2020-02-02",
                "y": 6
            },
            {
                "x": "2020-02-03",
                "y": 3
            },
            {
                "x": "2020-02-04",
                "y": 1
            },
            {
                "x": "2020-02-05",
                "y": 5
            },
            {
                "x": "2020-02-06",
                "y": 3
            },
            {
                "x": "2020-02-07",
                "y": 6
            },
            {
                "x": "2020-02-08",
                "y": 5
            }
        ],
        "visitData2": [
            {
                "x": "2020-01-23",
                "y": 1
            },
            {
                "x": "2020-01-24",
                "y": 6
            },
            {
                "x": "2020-01-25",
                "y": 4
            },
            {
                "x": "2020-01-26",
                "y": 8
            },
            {
                "x": "2020-01-27",
                "y": 3
            },
            {
                "x": "2020-01-28",
                "y": 7
            },
            {
                "x": "2020-01-29",
                "y": 2
            }
        ],
        "salesData": [
            {
                "x": "1月",
                "y": 838
            },
            {
                "x": "2月",
                "y": 1149
            },
            {
                "x": "3月",
                "y": 683
            },
            {
                "x": "4月",
                "y": 580
            },
            {
                "x": "5月",
                "y": 763
            },
            {
                "x": "6月",
                "y": 208
            },
            {
                "x": "7月",
                "y": 882
            },
            {
                "x": "8月",
                "y": 290
            },
            {
                "x": "9月",
                "y": 960
            },
            {
                "x": "10月",
                "y": 1093
            },
            {
                "x": "11月",
                "y": 502
            },
            {
                "x": "12月",
                "y": 1020
            }
        ],
        "searchData": [
            {
                "index": 1,
                "keyword": "搜索关键词-0",
                "count": 151,
                "range": 6,
                "status": 1
            },
            {
                "index": 2,
                "keyword": "搜索关键词-1",
                "count": 123,
                "range": 88,
                "status": 1
            },
            {
                "index": 3,
                "keyword": "搜索关键词-2",
                "count": 738,
                "range": 25,
                "status": 1
            },
            {
                "index": 4,
                "keyword": "搜索关键词-3",
                "count": 25,
                "range": 36,
                "status": 0
            },
            {
                "index": 5,
                "keyword": "搜索关键词-4",
                "count": 790,
                "range": 97,
                "status": 0
            },
            {
                "index": 6,
                "keyword": "搜索关键词-5",
                "count": 173,
                "range": 54,
                "status": 0
            },
            {
                "index": 7,
                "keyword": "搜索关键词-6",
                "count": 104,
                "range": 68,
                "status": 1
            },
            {
                "index": 8,
                "keyword": "搜索关键词-7",
                "count": 776,
                "range": 10,
                "status": 0
            },
            {
                "index": 9,
                "keyword": "搜索关键词-8",
                "count": 45,
                "range": 7,
                "status": 1
            },
            {
                "index": 10,
                "keyword": "搜索关键词-9",
                "count": 219,
                "range": 26,
                "status": 1
            },
            {
                "index": 11,
                "keyword": "搜索关键词-10",
                "count": 243,
                "range": 13,
                "status": 1
            },
            {
                "index": 12,
                "keyword": "搜索关键词-11",
                "count": 973,
                "range": 90,
                "status": 0
            },
            {
                "index": 13,
                "keyword": "搜索关键词-12",
                "count": 533,
                "range": 81,
                "status": 1
            },
            {
                "index": 14,
                "keyword": "搜索关键词-13",
                "count": 400,
                "range": 57,
                "status": 1
            },
            {
                "index": 15,
                "keyword": "搜索关键词-14",
                "count": 541,
                "range": 54,
                "status": 0
            },
            {
                "index": 16,
                "keyword": "搜索关键词-15",
                "count": 660,
                "range": 78,
                "status": 0
            },
            {
                "index": 17,
                "keyword": "搜索关键词-16",
                "count": 653,
                "range": 64,
                "status": 1
            },
            {
                "index": 18,
                "keyword": "搜索关键词-17",
                "count": 881,
                "range": 10,
                "status": 1
            },
            {
                "index": 19,
                "keyword": "搜索关键词-18",
                "count": 458,
                "range": 32,
                "status": 1
            },
            {
                "index": 20,
                "keyword": "搜索关键词-19",
                "count": 186,
                "range": 60,
                "status": 0
            },
            {
                "index": 21,
                "keyword": "搜索关键词-20",
                "count": 817,
                "range": 42,
                "status": 1
            },
            {
                "index": 22,
                "keyword": "搜索关键词-21",
                "count": 960,
                "range": 17,
                "status": 1
            },
            {
                "index": 23,
                "keyword": "搜索关键词-22",
                "count": 158,
                "range": 91,
                "status": 1
            },
            {
                "index": 24,
                "keyword": "搜索关键词-23",
                "count": 649,
                "range": 31,
                "status": 1
            },
            {
                "index": 25,
                "keyword": "搜索关键词-24",
                "count": 548,
                "range": 92,
                "status": 1
            },
            {
                "index": 26,
                "keyword": "搜索关键词-25",
                "count": 992,
                "range": 87,
                "status": 1
            },
            {
                "index": 27,
                "keyword": "搜索关键词-26",
                "count": 132,
                "range": 79,
                "status": 0
            },
            {
                "index": 28,
                "keyword": "搜索关键词-27",
                "count": 299,
                "range": 17,
                "status": 0
            },
            {
                "index": 29,
                "keyword": "搜索关键词-28",
                "count": 4,
                "range": 66,
                "status": 0
            },
            {
                "index": 30,
                "keyword": "搜索关键词-29",
                "count": 922,
                "range": 3,
                "status": 0
            },
            {
                "index": 31,
                "keyword": "搜索关键词-30",
                "count": 799,
                "range": 79,
                "status": 0
            },
            {
                "index": 32,
                "keyword": "搜索关键词-31",
                "count": 326,
                "range": 92,
                "status": 0
            },
            {
                "index": 33,
                "keyword": "搜索关键词-32",
                "count": 261,
                "range": 33,
                "status": 1
            },
            {
                "index": 34,
                "keyword": "搜索关键词-33",
                "count": 776,
                "range": 54,
                "status": 1
            },
            {
                "index": 35,
                "keyword": "搜索关键词-34",
                "count": 783,
                "range": 50,
                "status": 0
            },
            {
                "index": 36,
                "keyword": "搜索关键词-35",
                "count": 457,
                "range": 60,
                "status": 0
            },
            {
                "index": 37,
                "keyword": "搜索关键词-36",
                "count": 289,
                "range": 68,
                "status": 1
            },
            {
                "index": 38,
                "keyword": "搜索关键词-37",
                "count": 657,
                "range": 0,
                "status": 1
            },
            {
                "index": 39,
                "keyword": "搜索关键词-38",
                "count": 187,
                "range": 35,
                "status": 0
            },
            {
                "index": 40,
                "keyword": "搜索关键词-39",
                "count": 457,
                "range": 56,
                "status": 0
            },
            {
                "index": 41,
                "keyword": "搜索关键词-40",
                "count": 216,
                "range": 42,
                "status": 1
            },
            {
                "index": 42,
                "keyword": "搜索关键词-41",
                "count": 354,
                "range": 14,
                "status": 0
            },
            {
                "index": 43,
                "keyword": "搜索关键词-42",
                "count": 86,
                "range": 85,
                "status": 0
            },
            {
                "index": 44,
                "keyword": "搜索关键词-43",
                "count": 989,
                "range": 21,
                "status": 0
            },
            {
                "index": 45,
                "keyword": "搜索关键词-44",
                "count": 476,
                "range": 60,
                "status": 1
            },
            {
                "index": 46,
                "keyword": "搜索关键词-45",
                "count": 929,
                "range": 79,
                "status": 0
            },
            {
                "index": 47,
                "keyword": "搜索关键词-46",
                "count": 907,
                "range": 96,
                "status": 1
            },
            {
                "index": 48,
                "keyword": "搜索关键词-47",
                "count": 567,
                "range": 92,
                "status": 1
            },
            {
                "index": 49,
                "keyword": "搜索关键词-48",
                "count": 160,
                "range": 15,
                "status": 0
            },
            {
                "index": 50,
                "keyword": "搜索关键词-49",
                "count": 79,
                "range": 64,
                "status": 1
            }
        ],
        "offlineData": [
            {
                "name": "Stores 0",
                "cvr": 0.5
            },
            {
                "name": "Stores 1",
                "cvr": 0.4
            },
            {
                "name": "Stores 2",
                "cvr": 0.1
            },
            {
                "name": "Stores 3",
                "cvr": 0.1
            },
            {
                "name": "Stores 4",
                "cvr": 0.4
            },
            {
                "name": "Stores 5",
                "cvr": 0.2
            },
            {
                "name": "Stores 6",
                "cvr": 0.1
            },
            {
                "name": "Stores 7",
                "cvr": 0.4
            },
            {
                "name": "Stores 8",
                "cvr": 0.3
            },
            {
                "name": "Stores 9",
                "cvr": 0.6
            }
        ],
        "offlineChartData": [
            {
                "x": 1579768336004,
                "y1": 20,
                "y2": 28
            },
            {
                "x": 1579770136004,
                "y1": 62,
                "y2": 53
            },
            {
                "x": 1579771936004,
                "y1": 20,
                "y2": 58
            },
            {
                "x": 1579773736004,
                "y1": 88,
                "y2": 84
            },
            {
                "x": 1579775536004,
                "y1": 55,
                "y2": 54
            },
            {
                "x": 1579777336004,
                "y1": 29,
                "y2": 91
            },
            {
                "x": 1579779136004,
                "y1": 68,
                "y2": 34
            },
            {
                "x": 1579780936004,
                "y1": 108,
                "y2": 90
            },
            {
                "x": 1579782736004,
                "y1": 40,
                "y2": 46
            },
            {
                "x": 1579784536004,
                "y1": 19,
                "y2": 21
            },
            {
                "x": 1579786336004,
                "y1": 28,
                "y2": 70
            },
            {
                "x": 1579788136004,
                "y1": 33,
                "y2": 80
            },
            {
                "x": 1579789936004,
                "y1": 50,
                "y2": 86
            },
            {
                "x": 1579791736004,
                "y1": 73,
                "y2": 57
            },
            {
                "x": 1579793536004,
                "y1": 88,
                "y2": 29
            },
            {
                "x": 1579795336004,
                "y1": 101,
                "y2": 103
            },
            {
                "x": 1579797136004,
                "y1": 99,
                "y2": 87
            },
            {
                "x": 1579798936004,
                "y1": 107,
                "y2": 82
            },
            {
                "x": 1579800736004,
                "y1": 86,
                "y2": 49
            },
            {
                "x": 1579802536004,
                "y1": 75,
                "y2": 67
            }
        ],
        "salesTypeData": [
            {
                "x": "家用电器",
                "y": 4544
            },
            {
                "x": "食用酒水",
                "y": 3321
            },
            {
                "x": "个护健康",
                "y": 3113
            },
            {
                "x": "服饰箱包",
                "y": 2341
            },
            {
                "x": "母婴产品",
                "y": 1231
            },
            {
                "x": "其他",
                "y": 1231
            }
        ],
        "salesTypeDataOnline": [
            {
                "x": "家用电器",
                "y": 244
            },
            {
                "x": "食用酒水",
                "y": 321
            },
            {
                "x": "个护健康",
                "y": 311
            },
            {
                "x": "服饰箱包",
                "y": 41
            },
            {
                "x": "母婴产品",
                "y": 121
            },
            {
                "x": "其他",
                "y": 111
            }
        ],
        "salesTypeDataOffline": [
            {
                "x": "家用电器",
                "y": 99
            },
            {
                "x": "食用酒水",
                "y": 188
            },
            {
                "x": "个护健康",
                "y": 344
            },
            {
                "x": "服饰箱包",
                "y": 255
            },
            {
                "x": "其他",
                "y": 65
            }
        ],
        "radarData": [
            {
                "name": "个人",
                "label": "引用",
                "value": 10
            },
            {
                "name": "个人",
                "label": "口碑",
                "value": 8
            },
            {
                "name": "个人",
                "label": "产量",
                "value": 4
            },
            {
                "name": "个人",
                "label": "贡献",
                "value": 5
            },
            {
                "name": "个人",
                "label": "热度",
                "value": 7
            },
            {
                "name": "团队",
                "label": "引用",
                "value": 3
            },
            {
                "name": "团队",
                "label": "口碑",
                "value": 9
            },
            {
                "name": "团队",
                "label": "产量",
                "value": 6
            },
            {
                "name": "团队",
                "label": "贡献",
                "value": 3
            },
            {
                "name": "团队",
                "label": "热度",
                "value": 1
            },
            {
                "name": "部门",
                "label": "引用",
                "value": 4
            },
            {
                "name": "部门",
                "label": "口碑",
                "value": 1
            },
            {
                "name": "部门",
                "label": "产量",
                "value": 6
            },
            {
                "name": "部门",
                "label": "贡献",
                "value": 5
            },
            {
                "name": "部门",
                "label": "热度",
                "value": 7
            }
        ]
    }
  });
}

module.exports = proxy;
