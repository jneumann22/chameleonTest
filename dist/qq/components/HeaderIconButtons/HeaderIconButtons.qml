<view class="icon-button-container  cml-base cml-view">
  <view qq:if="{{findLocationDetails}}" class="icon-button  cml-base cml-view" bindtap="_cmlEventProxy" data-eventtap="{{['loadMap']}}">
    <image class="icon  cml-base cml-image" src="https://m.meetkai.com/static/develop/images/websiteIcon.png" resize="cover" />
  </view>
  <view qq:if="{{telephone}}" class="icon-button  cml-base cml-view" bindtap="_cmlEventProxy" data-eventtap="{{['makeCall']}}">
    <image class="icon  cml-base cml-image" src="https://m.meetkai.com/static/develop/images/phoneIcon.png" resize="cover" />
  </view>
</view>