const Cancellation = () => {
  return (
    <div className="cancellation-refund-policy bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Cancellation and Refund Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Cancellation of Services</h2>
        <p className="mb-4">
          You may cancel your service subscription or order by contacting us at [Contact Email Address]. Please provide your order details and the reason for cancellation. Cancellation requests must be submitted within [number of days] days of purchase.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Refund Eligibility</h2>
        <ul className="list-disc ml-8 mb-4">
          <li>Service Not Rendered: If we are unable to provide the service you purchased, you are eligible for a full refund.</li>
          <li>Cancellation within Cooling-off Period: If you cancel your subscription or order within the specified cooling-off period (usually [number of days] days from the date of purchase), you are eligible for a full refund.</li>
          <li>Quality Issues: If the service provided does not meet the quality standards or specifications outlined in our agreement, you may be eligible for a partial or full refund.</li>
          <li>Other Circumstances: Refunds may be considered on a case-by-case basis for other valid reasons, such as technical issues or extenuating circumstances.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Refund Process</h2>
        <p className="mb-4">
          To request a refund, please contact us at [Contact Email Address] with your order details and the reason for the refund request. We will review your request and respond within [number of days] days.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Refund Terms</h2>
        <ul className="list-disc ml-8 mb-4">
          <li>Refunds will be processed using the original payment method used for the purchase.</li>
          <li>Refunds may take [number of days] days to be credited to your account, depending on your payment provider.</li>
          <li>Any fees or charges incurred during the purchase process, such as transaction fees, may not be refunded.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Non-Refundable Items</h2>
        <p className="mb-4">
          Certain items or services may not be eligible for refunds, including:
        </p>
        <ul className="list-disc ml-8">
          <li>Digital products or downloadable content once accessed or downloaded.</li>
          <li>Services that have been fully rendered or completed.</li>
          <li>Customized or personalized services that cannot be resold.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Cancellation of Subscriptions</h2>
        <p className="mb-4">
          If you cancel a subscription, you will continue to have access to the services until the end of the current billing cycle. No further charges will be incurred after cancellation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Changes to Policy</h2>
        <p className="mb-4">
          We reserve the right to modify or update this Cancellation and Refund Policy at any time. The most current version of the policy will be posted on our website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Cancellation and Refund Policy, please contact us at letscode@gmail.com
        </p>
        <p className="mb-4">
          Thank you for choosing LetsCode
        </p>
      </section>
    </div>
  );
};

export default Cancellation;