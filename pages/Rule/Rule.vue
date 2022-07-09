<template>
  <view>
    <h3 class="center">{{ $t("rule.name") }}</h3>
    <view class="center bold pt-10 pb-10">
      {{ $t("rule.rulesgame") }}
    </view>
    <view class="center">
      {{ $t("rule.mes1") }}<text class="col-include">{{ $t("rule.mes2") }}</text
      >。
    </view>
    <view class=""> {{ $t("rule.mes3") }} </view>
    <view class="center text-area pb-10">
      <text class="text-box right c-fff">ا</text>
      <text class="text-box right c-fff">ر</text>
      <text class="text-box include c-fff">ا</text>
    </view>
    <view class="center text-area pb-10">
      <text class="text-box right c-fff">a</text>
      <text class="text-box right c-fff">r</text>
      <text class="text-box include c-fff">a</text>
    </view>
    <view class=""> {{ $t("rule.mes4") }} </view>
    <view class="center text-area pb-10">
      <text class="text-box right c-fff">ا</text>
      <text class="text-box right c-fff">ر</text>
      <text class="text-box include c-fff">ا</text>
    </view>
    <view class="center text-area pb-10">
      <text class="text-box right c-fff">a</text>
      <text class="text-box right c-fff">r</text>
      <text class="text-box include c-fff">a</text>
    </view>
    <view class="centr"> {{ $t("rule.mes5") }} </view>
    <view class="center text-area pb-10">
      <text class="text-box right c-fff">ا</text>
      <text class="text-box right c-fff">ر</text>
      <text class="text-box right c-fff">ا</text>
    </view>
    <view class="center text-area pb-10">
      <text class="text-box right c-fff">a</text>
      <text class="text-box right c-fff">r</text>
      <text class="text-box right c-fff">a</text>
    </view>
    <view class="center"> {{ $t("rule.mes6") }} </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isHapin: false,
    };
  },
  onLoad(obj) {
    if (obj.isHapin !== undefined) {
      this.isHapin = obj.isHapin;
    }
  },
};
</script>

<style lang="scss">
.center {
  text-align: center;
}

.pt-10 {
  padding-top: 10rpx;
}

.pb-10 {
  padding-bottom: 10rpx;
}

.bold {
  font-weight: bold;
}

.include {
  background-color: #de7525;
}
.col-include {
  color: #de7525;
}

.right {
  background-color: #1d9c9c;
}
.c-fff {
  color: #fff;
}
.except {
  background-color: #5d6673;
}

.text-area {
  display: flex;
  justify-content: center;
  margin-top: 20rpx;

  .text-box {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40rpx;
    font-weight: blod;
    height: 80rpx;
    width: 80rpx;
    margin: 0 10rpx;
    border: 1px solid #f0f0f0;
  }
}
</style>
