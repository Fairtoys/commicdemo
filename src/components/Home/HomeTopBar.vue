<template>
    <div class="top-bar">
        <img class="top-bar-items" src="../icons/common/light/ic_礼物盒@3x.png" alt="" @click="console.log('礼物')">
        <div class="top-bar-items-coin-tip" @click="console.log('do币')">
            <img class="cash-icon" src="../icons/common/normal/icon_cash@3x.png" alt="">
            <div class="cash-title">可领 3,013 DO币</div>
        </div>
        <img class="top-bar-items normal" src="../icons/common/light/icon_notify@3x.png" alt="" @click="console.log('通知')">
        <img class="top-bar-items normal" src="../icons/common/light/ic_搜索@3x.png" alt="" @click="console.log('搜索')">
        <img class="top-bar-items" src="../icons/common/light/ic_我@3x.png" alt="" @click="console.log('我的')">
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.top-bar {
    display: flex;
    height: 40px;
    align-items: center;
    margin: auto 20px;

    .top-bar-items {
        width: 24px;
        height: 24px;

        &.normal {
            margin-right: 20px;
        }
    }

    .top-bar-items-coin-tip {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 8px;
        margin-right: auto;
        height: 24px;
        border-radius: 12px;
        background-color: rgba(183, 141, 68, 0.15);
        padding: 0px 8px;

        .cash-icon {
            width: 10.5px;
            height: 12px;
            margin-right: 4px;
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