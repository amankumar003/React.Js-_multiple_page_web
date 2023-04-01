import React from "react";
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';

export const Pricing = () => {
  return (
    <div id="pricing" className="text-center">

      <div className="container">
        <div className="row">
          <h2 className="gall">Pricing</h2>

          <PricingTable highlightColor='#1976D2'>
            <PricingSlot highlighted buttonText='TRY IT FREE' title='STANDARD' priceText='$29.99/month'>
              <PricingDetail> Feedback-Maximum <b>10 per</b> Open House</PricingDetail>
              <PricingDetail> Send auto text to Raffle winners</PricingDetail>
              <PricingDetail> <b>Unlimited</b> Capture FootFallz on open House guests</PricingDetail>
              <PricingDetail > Open House QR code</PricingDetail>
              <PricingDetail> Share open house summary with Sellers</PricingDetail>
              <PricingDetail> Notify when guest give feedback</PricingDetail>
            </PricingSlot>
            <PricingSlot buttonText='SIGN UP' title='PRIMARY' priceText='$49.99/month'>
              <PricingDetail> <b>Custom</b> Branding</PricingDetail>
              <PricingDetail> Number of Raffles - <b>Unlimited</b></PricingDetail>
              <PricingDetail> Capture FootFallz on open House guests</PricingDetail>
              <PricingDetail> Create auto tasks for Birthdays</PricingDetail>
              <PricingDetail> Allow tags to create custom lists</PricingDetail>
              <PricingDetail> Invite Hosts to your open House</PricingDetail>
            </PricingSlot>
          </PricingTable>
        </div>
      </div>
    </div>
  );
};
