<view class="footer-container  cml-base cml-view">
    <view class="footer-button  cml-base cml-view" bindtap="_cmlEventProxy" data-eventtap="{{['onSearchClick']}}">
      <text class="button-text font-semibold  cml-base cml-text">New Search</text>
    </view>
    <view qq:if="{{musePivot && domain}}" class="center-line  cml-base cml-view" />
    <view qq:if="{{musePivot && domain}}" class="footer-button  cml-base cml-view" bindtap="_cmlEventProxy" data-eventtap="{{['onMoreResultsClick']}}">
      <text class="button-text font-semibold  cml-base cml-text">More Results</text>
    </view>
</view>