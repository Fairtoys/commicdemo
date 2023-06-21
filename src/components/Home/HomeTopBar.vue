<template>
    <div class="top-bar">
        <img class="top-bar-items" src="../icons/common/light/ic_礼物盒.png" alt="">
        <div class="top-bar-items-coin-tip">
            <img src="../icons/common/normal/icon_cash.png" alt="">
            <div class="cash-title">可领 3,013 DO币</div>
        </div>
        <img class="top-bar-items" src="../icons/common/light/icon_notify.png" alt="">
        <img class="top-bar-items" src="../icons/common/light/ic_搜索.png" alt="">
        <img class="top-bar-items" src="../icons/common/light/ic_我.png" alt="">
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.top-bar {
    display: flex;
    height: 40px;
    align-items: center;

    .top-bar-items {
        margin-right: 20px;
        width: 24px;
        height: 24px;
    }

    .top-bar-items-coin-tip {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: auto;
        height: 24px;
        border-radius: 12px;
        background-color: rgba(183, 141, 68, 0.15);

        .cash-icon {
            width: 10.5px;
            height: 12px;
        }

        .cash-title {
            font-family: 'PingFang SC';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 14px;
            color: #CEA152;
        }
    }
}
</style>