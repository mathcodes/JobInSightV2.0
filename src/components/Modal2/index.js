import React from 'react'
import $ from 'jquery';


   $(function(){
  $('[data-toggle="popover"]').popover()
});
export default function Modal2() {
  return (

 <>
<button type="button" class="btn btn-secondary" data-container="body"
        data-toggle="popover" data-placement="top"
        data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on top
</button>

<button type="button" class="btn btn-secondary" data-container="body"
        data-toggle="popover" data-placement="right"
        data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on right
</button>

<button type="button" class="btn btn-secondary" data-container="body"
        data-toggle="popover" data-placement="bottom"
        data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on bottom
</button>

<button type="button" class="btn btn-secondary" data-container="body"
        data-toggle="popover" data-placement="left"
        data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on left
</button>
</>  )
}
