export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Terms & Conditions</h1>
      <div className="mt-4 space-y-4 text-slate-700">
        <p>
          By using our website or services, you agree to comply with our terms:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Projects begin upon confirmed quotation and payment schedule.</li>
          <li>All digital assets delivered after full payment.</li>
          <li>Clients are responsible for providing accurate content and assets.</li>
          <li>Blueberry IT Sky reserves the right to feature completed projects in our portfolio.</li>
        </ul>
      </div>
    </div>
  );
}