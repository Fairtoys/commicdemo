<template>
    <div class="container">
        <img class="indicator" src="../icons/common/normal/icoIcoLoading@3x.png" alt="">
    </div>
</template>

<style lang="less" scoped>
.container {
    position: absolute;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;

    .indicator {
        width: 64px;
        height: 64px;
        animation: rotate 0.5s linear infinite;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }

        25% {
            transform: rotate(90deg);
        }

        50% {
            transform: rotate(180deg);
        }

        75% {
            transform: rotate(270deg);
        }

        100% {
            transform: rotate(360deg);
        }

    }
}</style>

