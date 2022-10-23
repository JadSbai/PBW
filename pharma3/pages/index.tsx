import React from "react";
import { Header } from "../components/Header";
import { MailingListForm } from "../components/MailingListForm";

const IndexPage = () => (
  <div className="px-4 pt-8 bg-white min-h-screen">
    <Header title="kids from vision" />
    <MailingListForm />
  </div>
);

export default IndexPage;
