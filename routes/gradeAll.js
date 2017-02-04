var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/:id/:pwd', function(req, res, next) {
    var info = {
        id: req.params.id,
        pwd: req.params.pwd
    };
    res.render('gradeAll', { info: info, gradeAll: test.gradeAll,totallInfo:test.totallInfo });

});

var test = {
    "studentId": "20144998",
    "studentPassword": "705118",
    "studentName": "熊俊臣",
    "totallInfo": "{总学分:104.50,总绩点:3.48}",
    "schedule": [
        "第1周周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:土木工程施工（I[3-4节]B二410,周一:杆系结构有限元法[5-6节]B二410,周二:地下建筑结构[1-2节]B二408,周二:基础工程（II[3-4节]B二417,周二:结构分析软件及应用[5-6节]B二417,周三:混凝土与砌体结构（含抗震）[3-4节]B二404,周三:杆系结构有限元法[5-6节]B二410,周四:地下建筑结构[1-2节]B二408,周四:土木工程施工（I[3-4节]B二410,周五:混凝土与砌体结构（含抗震）[1-2节]B二404,周五:基础工程（II[3-4节]B二417,周五:结构分析软件及应用[5-6节]B二407",
        "第2周周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:杆系结构有限元法[5-6节]B二410,周二:杆系结构有限元法[7-8节]A理119,周二:地下建筑结构[1-2节]B二408,周二:结构分析软件及应用[5-6节]B二417,周二:杆系结构有限元法[7-8节]A理119,周三:混凝土与砌体结构（含抗震）[3-4节]B二404,周三:杆系结构有限元法[5-6节]B二410,周四:结构分析软件及应用[5-8节]A理119,周四:地下建筑结构[1-2节]B二408,周四:结构分析软件及应用[5-8节]A理119,周五:混凝土与砌体结构（含抗震）[1-2节]B二404,周五:结构分析软件及应用[5-6节]B二407",
        "第3周周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:土木工程施工（I[3-4节]B二410,周一:杆系结构有限元法[5-6节]B二410,周二:杆系结构有限元法[7-8节]A理119,周二:地下建筑结构[1-2节]B二408,周二:基础工程（II[3-4节]B二417,周二:结构分析软件及应用[5-6节]B二417,周二:杆系结构有限元法[7-8节]A理119,周三:土木工程施工（I[1-2节]B二410,周三:混凝土与砌体结构（含抗震）[3-4节]B二404,周三:杆系结构有限元法[5-6节]B二410,周四:结构分析软件及应用[5-8节]A理119,周四:地下建筑结构[1-2节]B二408,周四:土木工程施工（I[3-4节]B二410,周四:结构分析软件及应用[5-8节]A理119,周五:混凝土与砌体结构（含抗震）[1-2节]B二404,周五:基础工程（II[3-4节]B二417,周五:结构分析软件及应用[5-6节]B二407",
        "第4周周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:土木工程施工（I[3-4节]B二410,周一:杆系结构有限元法[5-6节]B二410,周二:杆系结构有限元法[7-8节]A理119,周二:地下建筑结构[1-2节]B二408,周二:基础工程（II[3-4节]B二417,周二:结构分析软件及应用[5-6节]B二417,周二:杆系结构有限元法[7-8节]A理119,周三:土木工程施工（I[1-2节]B二410,周三:混凝土与砌体结构（含抗震）[3-4节]B二404,周三:杆系结构有限元法[5-6节]B二410,周四:结构分析软件及应用[5-8节]A理119,周四:地下建筑结构[1-2节]B二408,周四:土木工程施工（I[3-4节]B二410,周四:结构分析软件及应用[5-8节]A理119,周五:混凝土与砌体结构（含抗震）[1-2节]B二404,周五:基础工程（II[3-4节]B二417,周五:结构分析软件及应用[5-6节]B二407",
        "第5周周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:土木工程施工（I[3-4节]B二410,周一:杆系结构有限元法[5-6节]B二410,周二:杆系结构有限元法[7-8节]A理119,周二:地下建筑结构[1-2节]B二408,周二:基础工程（II[3-4节]B二417,周二:杆系结构有限元法[7-8节]A理119,周三:土木工程施工（I[1-2节]B二410,周三:混凝土与砌体结构（含抗震）[3-4节]B二404,周三:杆系结构有限元法[5-6节]B二410,周四:结构分析软件及应用[5-8节]A理119,周四:地下建筑结构[1-2节]B二408,周四:土木工程施工（I[3-4节]B二410,周四:结构分析软件及应用[5-8节]A理119,周五:混凝土与砌体结构（含抗震）[1-2节]B二404,周五:基础工程（II[3-4节]B二417",
        "第6周周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:土木工程施工（I[3-4节]B二410,周一:杆系结构有限元法[5-6节]B二410,周二:杆系结构有限元法[7-8节]A理119,周二:地下建筑结构[1-2节]B二408,周二:基础工程（II[3-4节]B二417,周二:杆系结构有限元法[7-8节]A理119,周三:土木工程施工（I[1-2节]B二410,周三:混凝土与砌体结构（含抗震）[3-4节]B二404,周三:杆系结构有限元法[5-6节]B二410,周四:地下建筑结构[1-2节]B二408,周四:土木工程施工（I[3-4节]B二410,周五:混凝土与砌体结构（含抗震）[1-2节]B二404,周五:基础工程（II[3-4节]B二417",
        "第7周周三:混凝土与砌体结构（含抗震）[3-4节]B二404,周四:地下建筑结构[1-2节]B二408,周四:土木工程施工（I[3-4节]B二410,周五:混凝土与砌体结构（含抗震）[1-2节]B二404,周五:基础工程（II[3-4节]B二417,周五:木结构设计[5-6节]B二413",
        "第8周周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:土木工程施工（I[3-4节]B二410,周一:杆系结构有限元法[5-6节]B二410,周二:杆系结构有限元法[7-8节]A理119,周二:地下建筑结构[1-2节]B二408,周二:基础工程（II[3-4节]B二417,周二:木结构设计[5-6节]B二413,周二:杆系结构有限元法[7-8节]A理119,周三:混凝土与砌体结构（含抗震）[3-4节]B二404,周四:地下建筑结构[1-2节]B二408,周四:土木工程施工（I[3-4节]B二410,周五:混凝土与砌体结构（含抗震）[1-2节]B二404,周五:基础工程（II[3-4节]B二417,周五:木结构设计[5-6节]B二413",
        "第9周周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:土木工程施工（I[3-4节]B二410,周二:地下建筑结构[1-2节]B二408,周二:基础工程（II[3-4节]B二417,周二:木结构设计[5-6节]B二413,周三:混凝土与砌体结构（含抗震）[3-4节]B二404,周四:地下建筑结构[1-2节]B二408,周四:土木工程施工（I[3-4节]B二410,周五:混凝土与砌体结构（含抗震）[1-2节]B二404,周五:基础工程（II[3-4节]B二417,周五:木结构设计[5-6节]B二413",
        "第10周周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:土木工程施工（I[3-4节]B二410,周二:地下建筑结构[1-2节]B二408,周二:基础工程（II[3-4节]B二417,周二:木结构设计[5-6节]B二413,周三:混凝土与砌体结构（含抗震）[3-4节]B二404,周四:地下建筑结构[1-2节]B二408,周四:土木工程施工（I[3-4节]B二410,周五:混凝土与砌体结构（含抗震）[1-2节]B二404,周五:木结构设计[5-6节]B二413",
        "第11周周二:木结构设计[5-6节]B二413,周三:混凝土与砌体结构（含抗震）[3-4节]B二404,周四:地下建筑结构[1-2节]B二408,周四:土木工程施工（I[3-4节]B二410,周五:混凝土与砌体结构（含抗震）[1-2节]B二404,周五:木结构设计[5-6节]B二413",
        "第12周周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:混凝土与砌体结构（含抗震）[1-2节]B二404,周一:土木工程施工（I[3-4节]B二410,周二:木结构设计[5-6节]B二413,周四:土木工程施工（I[3-4节]B二410,周五:木结构设计[5-6节]B二413",
        "第13周周一:综合课程设计[13节],周二:木结构设计[5-6节]B二413",
        "第14周周一:综合课程设计[13节]",
        "第15周周一:综合课程设计[13节]",
        "第16周周一:综合课程设计[13节]",
        "第17周周一:综合课程设计[13节]",
        "第18周周一:综合课程设计[13节]",
        "第19周周一:综合课程设计[13节]",
        "第20周周一:综合课程设计[13节]"
    ],
    "gradeAll": [
        {
            "绩点": "3.60",
            "成绩": "86.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "3.00",
            "学科": "画法几何"
        },
        {
            "绩点": "3.50",
            "成绩": "85.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "2.00",
            "学科": "军事课"
        },
        {
            "绩点": "3.10",
            "成绩": "81.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "2.00",
            "学科": "学业素养英语"
        },
        {
            "绩点": "3.40",
            "成绩": "84.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "5.00",
            "学科": "高等数学1"
        },
        {
            "绩点": "2.80",
            "成绩": "78.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "2.00",
            "学科": "大学计算机基础"
        },
        {
            "绩点": "2.60",
            "成绩": "76.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "2.00",
            "学科": "中国近现代史纲要"
        },
        {
            "绩点": "4.00",
            "成绩": "91.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "2.50",
            "学科": "工程测量"
        },
        {
            "绩点": "3.50",
            "成绩": "良好",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "1.00",
            "学科": "新生研讨课"
        },
        {
            "绩点": "4.00",
            "成绩": "优秀",
            "修读性质": "初修",
            "类别": "实习",
            "学分": "1.00",
            "学科": "工程测量实习"
        },
        {
            "绩点": "3.90",
            "成绩": "89.00",
            "修读性质": "初修",
            "类别": "公共基础/素质",
            "学分": "2.00",
            "学科": "伟大的工程管理"
        },
        {
            "绩点": "3.10",
            "成绩": "81.00",
            "修读性质": "初修",
            "类别": "公共基础/选修课",
            "学分": "1.00",
            "学科": "英语口语交际技能（2"
        },
        {
            "绩点": "2.70",
            "成绩": "77.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "2.00",
            "学科": "大学化学Ⅲ"
        },
        {
            "绩点": "3.10",
            "成绩": "81.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "3.00",
            "学科": "线性代数"
        },
        {
            "绩点": "3.50",
            "成绩": "良好",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "0.50",
            "学科": "大学化学实验Ⅱ"
        },
        {
            "绩点": "3.30",
            "成绩": "83.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "2.00",
            "学科": "思想道德修养与法律基础"
        },
        {
            "绩点": "3.10",
            "成绩": "81.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "6.00",
            "学科": "高等数学2"
        },
        {
            "绩点": "4.00",
            "成绩": "93.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "3.50",
            "学科": "大学物理Ⅱ"
        },
        {
            "绩点": "3.70",
            "成绩": "87.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "1.50",
            "学科": "大学物理实验"
        },
        {
            "绩点": "3.00",
            "成绩": "80.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "0.50",
            "学科": "形势与政策（2"
        },
        {
            "绩点": "3.50",
            "成绩": "合格",
            "修读性质": "初修",
            "类别": "公共课/必修",
            "学分": "1.00",
            "学科": "体育项目"
        },
        {
            "绩点": "4.00",
            "成绩": "92.00",
            "修读性质": "初修",
            "类别": "专业课程/必修",
            "学分": "4.00",
            "学科": "建筑制图与房屋建筑学"
        },
        {
            "绩点": "4.00",
            "成绩": "优秀",
            "修读性质": "初修",
            "类别": "课程设计",
            "学分": "1.00",
            "学科": "建筑制图与房屋建筑学课程设计"
        },
        {
            "绩点": "3.50",
            "成绩": "良好",
            "修读性质": "初修",
            "类别": "实习",
            "学分": "1.00",
            "学科": "思想道德修养与法律基础实践"
        },
        {
            "绩点": "3.90",
            "成绩": "89.00",
            "修读性质": "初修",
            "类别": "公共基础/素质",
            "学分": "2.00",
            "学科": "《世说新语》导读"
        },
        {
            "绩点": "3.70",
            "成绩": "87.00",
            "修读性质": "初修",
            "类别": "公共基础/选修课",
            "学分": "1.00",
            "学科": "英语口语交际技能（3"
        },
        {
            "绩点": "3.40",
            "成绩": "84.00",
            "修读性质": "初修",
            "类别": "公共基础/选修课",
            "学分": "2.00",
            "学科": "学业素养英语（3"
        },
        {
            "绩点": "3.80",
            "成绩": "88.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "3.00",
            "学科": "毛泽东思想和中国特色社会主义理论体系概论"
        },
        {
            "绩点": "3.90",
            "成绩": "89.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "3.00",
            "学科": "概率论与数理统计Ⅰ"
        },
        {
            "绩点": "4.00",
            "成绩": "91.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "4.00",
            "学科": "大学物理Ⅱ"
        },
        {
            "绩点": "3.80",
            "成绩": "88.00",
            "修读性质": "初修",
            "类别": "专业基础/必修",
            "学分": "4.00",
            "学科": "理论力学（I"
        },
        {
            "绩点": "2.80",
            "成绩": "78.00",
            "修读性质": "初修",
            "类别": "专业基础/必修",
            "学分": "4.50",
            "学科": "材料力学（I"
        },
        {
            "绩点": "4.00",
            "成绩": "优秀",
            "修读性质": "初修",
            "类别": "实习",
            "学分": "3.00",
            "学科": "毛泽东思想和中国特色社会主义理论体系概论实践"
        },
        {
            "绩点": "3.30",
            "成绩": "83.00",
            "修读性质": "初修",
            "类别": "公共课/素质",
            "学分": "2.00",
            "学科": "建筑智能化概论"
        },
        {
            "绩点": "3.50",
            "成绩": "85.00",
            "修读性质": "初修",
            "类别": "公共基础/选修课",
            "学分": "2.00",
            "学科": "TED"
        },
        {
            "绩点": "3.40",
            "成绩": "84.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "0.50",
            "学科": "形势与政策（4"
        },
        {
            "绩点": "3.60",
            "成绩": "86.00",
            "修读性质": "初修",
            "类别": "公共基础/必修",
            "学分": "3.00",
            "学科": "马克思主义基本原理"
        },
        {
            "绩点": "3.50",
            "成绩": "合格",
            "修读性质": "初修",
            "类别": "公共课/必修",
            "学分": "1.00",
            "学科": "体育自选项目"
        },
        {
            "绩点": "3.70",
            "成绩": "87.00",
            "修读性质": "初修",
            "类别": "专业基础/必修",
            "学分": "4.50",
            "学科": "结构力学（I"
        },
        {
            "绩点": "3.50",
            "成绩": "良好",
            "修读性质": "初修",
            "类别": "实习",
            "学分": "1.00",
            "学科": "社会实践"
        },
        {
            "绩点": "3.50",
            "成绩": "良好",
            "修读性质": "初修",
            "类别": "实习",
            "学分": "0.50",
            "学科": "工程地质实习"
        },
        {
            "绩点": "2.60",
            "成绩": "76.00",
            "修读性质": "初修",
            "类别": "非限制/选修课",
            "学分": "1.50",
            "学科": "荷载与结构设计方法"
        },
        {
            "绩点": "2.80",
            "成绩": "78.00",
            "修读性质": "初修",
            "类别": "非限制/选修课",
            "学分": "2.50",
            "学科": "流体力学"
        },
        {
            "绩点": "2.90",
            "成绩": "79.00",
            "修读性质": "初修",
            "类别": "非限制/选修课",
            "学分": "2.00",
            "学科": "工程地质"
        },
        {
            "绩点": "2.70",
            "成绩": "77.00",
            "修读性质": "初修",
            "类别": "公共基础/选修课",
            "学分": "2.00",
            "学科": "跨文化商务沟通"
        },
        {
            "绩点": "4.00",
            "成绩": "90.00",
            "修读性质": "初修",
            "类别": "公共课/选修课",
            "学分": "2.00",
            "学科": "中国美术史及名作鉴赏"
        },
        {
            "绩点": "4.00",
            "成绩": "93.00",
            "修读性质": "初修",
            "类别": "专业基础/选修课",
            "学分": "2.50",
            "学科": "土木工程材料"
        }
    ]
}


module.exports = router;
