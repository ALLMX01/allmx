
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>山羊の前端小窝</title>
    <!-- 导入字体 -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <style>
        * {
            padding: 0;
            margin: 0;
            font-family: "优设标题黑";
            -webkit-user-select:none;
        }

        body {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
            background-color: #6e7cf5;
        }

        .shell {
            z-index: 99;
            width: 330px;
            height: 580px;
            border-radius: 15px;
            /* background-color: #fff6e7; */
            box-shadow: 0 10px 30px #00000085;
            /* 设置上高光和左高光，使其看起来更加逼真 */
            border-top: 1px solid rgba(255, 255, 255, .9);
            border-left: 1px solid rgba(255, 255, 255, .9);
            background: linear-gradient(to right bottom,
                    rgba(255, 255, 255, .6),
                    rgba(255, 255, 255, .3),
                    rgba(255, 255, 255, .2));
            /* 重点：使元素背景模糊化 */
            backdrop-filter: blur(16px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .cover {
            width: 280px;
            height: 270px;
            overflow: hidden;
            position: absolute;
            top: 20px;
            border-radius: 5px;
            box-shadow: 0 5px 30px #7d70ecb7;
        }

        .cover img {
            width: 100%;
        }

        .shell input[type=range] {
            -webkit-appearance: none !important;
            margin: 0px;
            padding: 0px;
            background: rgb(255, 255, 255);
            height: 5px;
            width: 150px;
            outline: none;
            cursor: pointer;
            overflow: hidden;
            border-radius: 5px;
        }

        .shell input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none !important;
            background: #ff3677;
            height: 5px;
            width: 5px;
            border-radius: 50%;
            box-shadow: -100vw 0 0 100vw rgb(160, 200, 250);
        }

        .shell input[type=range]::-moz-range-thumb {
            background: #ff3677;
            height: 8px;
            width: 8px;
            border-radius: 100%;
        }

        .shell input[type=range]::-ms-thumb {
            -webkit-appearance: none !important;
            background: #ff3677;
            height: 8px;
            width: 8px;
            border-radius: 100%;
        }

        .info {
            position: absolute;
            top: 305px;
            text-align: center;
        }

        .info .title {
            font-size: 35px;
            color: rgb(40, 45, 100);
        }

        .info .singer {
            font-size: 20px;
            color: #6e7cf5;
        }

        .btn-box {
            position: absolute;
            top: 400px;
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .btn-box i {
            font-size: 24px;
            color: rgb(40, 45, 100);
            margin: 0 30px;
            cursor: pointer;
        }

        .btn-box i.active {
            color: #ff3677;
        }

        .volume-box {
            display: none;
            position: absolute;
            top: 370px;
            z-index: 1;
            padding: 0 20px;
        }

        .volume-box .volume-down {
            position: absolute;
            left: -15px;
            cursor: pointer;
            color: rgb(40, 45, 100);
        }

        .volume-box .volume-up {
            position: absolute;
            right: -15px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            color: rgb(40, 45, 100);
        }

        .volume-box .volume-up::selection {
            background-color: unset;
        }

        .volume-box input[type=range] {
            height: 5px;
            width: 150px;
            margin: 0 0 15px 0;
        }

        .volume-box.active {
            display: block;
        }

        .music-box {
            position: absolute;
            top: 445px;
        }

        .music-box input[type=range] {
            height: 5px;
            width: 230px;
            margin: 0 0 10px 0;
        }

        .music-box input[type=range]::-webkit-slider-thumb {
            height: 5px;
            width: 7px;
        }

        .music-box .current-time {
            position: absolute;
            left: -35px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 12px;
            color: #252525;
        }

        .music-box .duration {
            position: absolute;
            right: -35px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 12px;
            color: rgb(40, 45, 100);
        }

        .music-box .play,
        .music-box .pause {
            position: absolute;
            left: 50%;
            top: 55px;
            transform: translateX(-50%);
            width: 50px;
            height: 50px;
            border-radius: 50px;
            background-color: rgb(160, 200, 250);
            cursor: pointer;
            transition: all 0.4s;
        }

        .music-box .play i,
        .music-box .pause i {
            font-size: 36px;
            color: rgb(40, 45, 100);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-48%, -50%);
        }

        .music-box .pause i {
            font-size: 32px;
            transform: translate(-50%, -50%);
        }
        video{
            position: absolute;
            width: 100%;
        }
    </style>
</head>

<body>
    <video src="./横版-原神-昼.mp4" muted loop autoplay></video>
    <div class="shell">
        <div class="cover">
            <img src="./1.jpg" alt="">
        </div>
        <div class="info">
            <div class="title">只因你太美</div>
            <div class="singer">坤坤</div>
        </div>
        <div class="volume-box">
            <span class="volume-down"><i class="material-icons">remove</i></span>
            <input type="range" class="volume-range" step="1" value="80" min="0" max="100"
                oninput="music.volume = this.value/100">
            <span class="volume-up"><i class="material-icons">add</i></span>
        </div>
        <div class="btn-box">
            <i class="material-icons repeat" onclick="handleRepeat()">repeat</i>
            <i class="material-icons favorite active" onclick="handleFavorite()">favorite</i>
            <i class="material-icons volume" onclick="handleVolume()">volume_up</i>
        </div>
        <div class="music-box">
            <input type="range" class="seekbar" step="1" value="0" min="0" max="100" oninput="handleSeekBar()">
            <audio class="music-element">
                <source src="./鸡你太美.m4a">
            </audio>
            <span class="current-time">0:0</span><span class="duration">0:0</span>
            <span class="play" onclick="handlePlay()">
                <i class="material-icons">play_arrow</i>
            </span>
        </div>
    </div>
</body>

<script>
    var music = document.querySelector('.music-element')
    var playBtn = document.querySelector('.play')
    var seekbar = document.querySelector('.seekbar')
    var currentTime = document.querySelector('.current-time')
    var duration = document.querySelector('.duration')
    function handlePlay() {
        // 如果音乐处于暂停状态
        if (music.paused) {
            // 播放音乐，更改按钮样式为暂停图标
            music.play();
            playBtn.className = 'pause'
            playBtn.innerHTML = '<i class="material-icons">pause</i>'
        } else {
            // 暂停音乐，更改按钮样式为播放图标
            music.pause();
            playBtn.className = 'play'
            playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
        }
        // 当音乐播放完毕时
        music.addEventListener('ended', function () {
            // 更改按钮样式为播放图标，并将音乐当前时间重置为0
            playBtn.className = 'play'
            playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
            music.currentTime = 0
        });
    }
    // 当音乐元素的元数据加载完毕时
    music.onloadeddata = function () {
        // 设置进度条最大值为音乐总时长
        seekbar.max = music.duration// 将音乐总时长格式化为分钟和秒，并在HTML中显示出来
        var ds = parseInt(music.duration % 60)
        var dm = parseInt((music.duration / 60) % 60)
        duration.innerHTML = dm + ':' + ds
    }
    // 当音乐当前播放时间更新时
    music.ontimeupdate = function () {
        // 将进度条的值设为当前播放时间，以实现进度条随着音乐播放而动态更新
        seekbar.value = music.currentTime
    }
    // 定义处理进度条拖动的函数
    handleSeekBar = function () {
        // 将音乐当前播放时间设为进度条的值，以实现通过拖动进度条控制音乐播放进度
        music.currentTime = seekbar.value
    }
    // 每当音乐的播放时间更新时
    music.addEventListener('timeupdate', function () {
        // 将音乐当前播放时间格式化为分钟和秒，并在HTML中显示出来
        var cs = parseInt(music.currentTime % 60)
        var cm = parseInt((music.currentTime / 60) % 60)
        currentTime.innerHTML = cm + ':' + cs
    }, false)
    // 爱心点击变色
    var favIcon = document.querySelector('.favorite')
    function handleFavorite() {
        favIcon.classList.toggle('active');
    }
    // 循环播放
    var repIcon = document.querySelector('.repeat')
    function handleRepeat() {
        if (music.loop == true) {
            music.loop = false
            repIcon.classList.toggle('active')
        }
        else {
            music.loop = true
            repIcon.classList.toggle('active')
        }
    }
    // 获取 HTML 中的音量图标、音量控制器、音量滑动条、音量减小按钮和音量增加按钮
    var volIcon = document.querySelector('.volume');
    var volBox = document.querySelector('.volume-box');
    var volumeRange = document.querySelector('.volume-range');
    var volumeDown = document.querySelector('.volume-down');
    var volumeUp = document.querySelector('.volume-up');
    // 处理音量控制器的函数
    function handleVolume() {
        // 切换音量图标和音量控制器的 class 属性
        volIcon.classList.toggle('active');
        volBox.classList.toggle('active');
    }
    // 为音量减小按钮和音量增加按钮分别添加 click 事件监听器，
    // 调用 handleVolumeDown 和 handleVolumeUp 函数
    volumeDown.addEventListener('click', handleVolumeDown);
    volumeUp.addEventListener('click', handleVolumeUp);
    // 处理音量减小的函数
    function handleVolumeDown() {
        // 将音量滑动条的值减少 20
        volumeRange.value = Number(volumeRange.value) - 20;
        // 将音乐的音量设置为音量滑动条的值除以 100
        music.volume = volumeRange.value / 100;
    }
    // 处理音量增加的函数
    function handleVolumeUp() {
        // 将音量滑动条的值增加 20
        volumeRange.value = Number(volumeRange.value) + 20;
        // 将音乐的音量设置为音量滑动条的值除以 100
        music.volume = volumeRange.value / 100;
    }

</script>

</html>