import { useState } from "react";
import { Button, Tooltip } from "reactstrap";

function SRCButton({ srcLink, className, args }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  const [idd] = useState(Math.round(Math.random()*1000000000).toString())

  return (
    
    <>
    <Button
      className={"rounded-full " + className}
      onClick={() => {
        if (srcLink) {
          window.open(srcLink, "_blank");
        }
      }}
      id={"srcLink" + idd}
    >
      <i className="fa fa-info-circle hover">
      </i>
    </Button>
    <Tooltip
        {...args}
        isOpen={tooltipOpen}
        target={"srcLink" + idd}
        toggle={toggle}
      >
        {srcLink}
      </Tooltip>
    </>
  );
}

SRCButton.args = {
  autohide: true,
  flip: true,
};

SRCButton.argTypes = {
  placement: {
    control: { type: 'select' },
    options: ['top', 'left', 'right', 'bottom'],
  },
};

export default SRCButton;
