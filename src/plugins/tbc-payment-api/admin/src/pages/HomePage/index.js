import React, { memo, useState } from "react";
import { nanoid } from "nanoid";
import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Illo } from "../../components/Illo";
import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";
import PaymentModal from "../../components/PaymentModal";

import PaymentTable from "../../components/PaymentTable";

const HomePage = () => {
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [showModal, setShowModal] = useState(false);

  async function addPayment(data) {
    setPaymentMethod([...paymentMethod, { ...data, id: nanoid(), isDone: false }]);
  }

  async function togglePayment(data) {
    alert("Add Toggle Todo in API");
  }

  async function deletePayment(data) {
    alert("Add Delete Todo in API");
  }

  async function editPayment(id, data) {
    alert("Add Edit Todo in API");
  }

  return (
    <>
      <BaseHeaderLayout
        title="TBC-Payment-Plugin"
        subtitle="All your Payment in one place."
        as="h2"
      />

      <ContentLayout>
        {paymentMethod.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any payments yet..."
            action={
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                startIcon={<Plus />}
              >
                Add first payment
              </Button>
            }
          />
        ) : (
          <PaymentTable
            paymentMethod={paymentMethod}
            setShowModal={setShowModal}
            togglePayment={togglePayment}
            deletePayment={deletePayment}
            editPayment={editPayment}
          />
        )}
      </ContentLayout>

      {showModal && <PaymentModal setShowModal={setShowModal} addPayment={addPayment} />}
    </>
  );
};

export default memo(HomePage);