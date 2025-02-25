import React from 'react'

export default function page() {
  return (
    <div className="bg-gray-50 p-6 lg:p-12 rounded-lg shadow-md max-w-4xl mx-auto my-12">
      <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 text-center">Refund & Cancellation Policy</h2>
      <div className="space-y-4 text-gray-700">
        <p>
          This cancellation policy outlines how you can cancel or seek a refund for a product or service purchased through the Platform. Under this policy:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Cancellations will only be considered if the request is made within <span className="font-medium text-gray-800">[X]</span> days of placing the order. However cancellation requests may not be entertained if the orders have been communicated to sellers/merchants listed on the Platform and they have initiated the process of shipping or if the product is out for delivery. In such cases you may choose to reject the product at the doorstep.
          </li>
          <li>
            <span className="font-medium text-gray-800">[X]</span> does not accept cancellation requests for perishable items like flowers eatables etc. However refunds or replacements can be made if the user establishes that the quality of the product delivered is not good.
          </li>
          <li>
            In case of receipt of damaged or defective items please report it to our customer service team. The request will be entertained once the seller/merchant listed on the Platform has checked and determined the same. This must be reported within <span className="font-medium text-gray-800">[X]</span> days of receiving the product.
          </li>
          <li>
            If you feel that the product received is not as shown on the site or does not meet your expectations you must bring it to the notice of our customer service team within <span className="font-medium text-gray-800">[X]</span> days of receiving the product. The customer service team will review your complaint and take an appropriate decision.
          </li>
          <li>
            For products that come with a warranty from the manufacturers please refer the issue to them directly.
          </li>
          <li>
            In case of any refunds approved by <span className="font-medium text-gray-800">[X]</span> it will take <span className="font-medium text-gray-800">[X]</span> days for the refund to be processed to you.
          </li>
        </ul>
      </div>
    </div>
  )
}
