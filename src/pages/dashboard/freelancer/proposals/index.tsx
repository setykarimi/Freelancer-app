import ProposalTable from "@features/proposals/table";

export default function FreelancerProposals() {
  return (
    <div>
      <h1 className="font-black text-secondary-700 text-xl mb-8">
        پروپروزال‌های شما
      </h1>
      <ProposalTable />
    </div>
  );
}
