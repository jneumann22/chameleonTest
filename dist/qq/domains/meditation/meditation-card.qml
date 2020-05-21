<view class="screen-container  cml-base cml-view">
  <view class="card-container  cml-base cml-view">
    <view class="card-image  cml-base cml-view">
    
    <ImageIconButtons itemID="{{jsonData.item.item_id}}" domain="{{jsonData.item.domain}}" class=" cml-base cml-ImageIconButtons" /> 
    
    <action-button text="{{jsonData.item.focus}}" defaultButtonStyle="default-orange-button" defaultTextStyle="default-orange-button-text" textColor="text-teal" textSize="font-large" handler="{{pressActionButton}}" class=" cml-base cml-action-button" />
    
     <OtherOptions class=" cml-base cml-OtherOptions" />

    
     
   </view>

    
    <Footer domain="domain" musePivot="muse_pivot" class=" cml-base cml-Footer" />
  </view>
</view>