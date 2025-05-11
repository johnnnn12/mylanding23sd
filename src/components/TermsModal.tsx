import React from 'react'

export default ({ onClose }: { onClose(): void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4">
    <div className="bg-dark text-primary p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
      <button
        className="absolute top-4 right-4 text-gray-500 text-2xl"
        onClick={onClose}
      >
        ×
      </button>
      <h3 className="text-2xl font-semibold mb-4">Terms & Conditions</h3>
      <ol className="list-decimal list-inside space-y-2 text-gray-200">
        <li>Definitions: Terminology for our services.</li>
        <li>Eligibility: Use for those over 18 years of age.</li>
        <li>Account Security: Keep your credentials private.</li>
        <li>Orders & Acceptance: Final after confirmation.</li>
        <li>Pricing: Subject to change without notice.</li>
        <li>Payment: Must be received before fulfillment.</li>
        <li>Shipping: Estimated delivery times.</li>
        <li>Taxes: Customer responsible for duties and VAT.</li>
        <li>Returns: Within 14 days, unworn items only.</li>
        <li>Exchanges: Subject to stock availability.</li>
        <li>Warranty: One-year warranty on craftsmanship.</li>
        <li>Limitation of Liability: No indirect damages.</li>
        <li>Intellectual Property: All designs remain ours.</li>
        <li>Privacy: We protect your data under GDPR.</li>
        <li>Marketing: Opt-in for promotional emails.</li>
        <li>Force Majeure: Events beyond our control.</li>
        <li>Termination: We may suspend accounts.</li>
        <li>Governing Law: Jurisdiction of Romania.</li>
        <li>Dispute Resolution: Arbitration only.</li>
        <li>Amendments: We update terms periodically.</li>
        <li>Contact: legal@talque.io for questions.</li>
      </ol>
    </div>
  </div>
)