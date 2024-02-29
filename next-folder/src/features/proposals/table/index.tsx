"use client"
import Loading from '@/common/loading';
import Table from '@/common/table';
import useProposals from '@/hooks/proposals/use-proposals';
import React from 'react'
import ProposalRow from './row';

export default function AllProposalsTable() {
    const {isLoading, proposals} = useProposals()
    if (isLoading) return <Loading />;
 
    if (!proposals.length) return <h3>یافت نشد</h3>;
  
    return (
      <>
        <Table>
          <Table.Header>
            <th>#</th>
            <th>توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th>وضعیت</th>
          </Table.Header>
          <Table.Body>
            {proposals.map((proposal: any, index: number) => (
              <ProposalRow key={proposal._id} proposal={proposal} index={index} />
            ))}
          </Table.Body>
        </Table>
      </>
    );
}
