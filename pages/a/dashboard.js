import React from 'react';
import OwnerLayout from '../../src/components/a/OwnerLayout/OwnerLayout';
import { ownerAuth } from '../../__lib__/helpers/requireAuthentication';

const Dashboard = () => {
    return (
        <OwnerLayout>
            
        </OwnerLayout>
    );
};

export default Dashboard;

export const getServerSideProps = ownerAuth((context) => {
    return {
      props: {},
    };
  });
  