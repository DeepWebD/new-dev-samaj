import DividerWithText from "../components/common/DividerWithText";
import StyledList from "../components/common/StyledList";
const admissionProcess = [
  "Admissions Open to Pre School As per the norms decided by the Govt.",
  "Registration: December or as advertised/notified by the Govt.",
  "Admission to other classes (Classes Ist to IXth & XIth) is subject to availability of seats.",
  "Admission is open to all children irrespective of caste, creed and religion. However, it is strictly on merit and depends on the number of vacancies in the class to which admission is sought.",
  "The Head of the school is the final authority in matters of admission and reserves to herself/himself the right to refuse admission or readmission to any child without furnishing any reason.",
  "A child seeking admission is to reg1ster her/his name by paying a Registration Fee (not Refundable).",
  "After Registration, the child will be given a test to find out if she/he is fit for the admission. The date of the test can be ascertained from the office. The result of the test is put up on the notice board.",
  "The admission of the child, who has otherwise qualified the Admission test, will be decided after an interaction with the child and Her/his parents.",
  "A Birth Certificate from the Municipality must be produced while seeking admission. Affidavits are not accepted. However, one who has attended a recognized school must produce a transfer certificate duly counter signed by Education Officer from the school last attended.",
  "A child selected for admission must pay the fees within two days of the notification on the Notice Board, failing which the admission is cancelled.",
];

const withdrawal_cancellation = [
  "A clear one term’s notice in writing, or one installment of fees in lieu thereof, must be given before a child can be withdrawn.",
  "The school leaving certificate cannot be issued until all dues are settled and a clearance obtained from the Librarian and the Class Teacher. It will be available three days after all the conditions for withdrawal are completed.",
  "A child’s name will be struck off the rolls:",
  "If he/she fails to clear his/her dues by the end of the period of an installment.",
  "If he/she remains absent for 10 consecutive days without Information.",
  "If he/she neglects the home task for a term or if his/her work IS continuously unsatisfactory.",
  "If the parent or guardian neglects to sign the diary regularly.",
  "If his/her parents neglect to meet the Head of the School inspite of repeated communications in connection with the studies or conduct of the pupil.",
  "If his/her conduct is unsatisfactory or anti-social and violates the school rules and discipline.",
  "If he/she fails in a class more than once.",
];

const payments = [
  "The fees may be paid for the whole academic year in lump sum or in four installments which will fall due on the 1st of April, July, October and January. Please pay within 10 days of the due date. Timings: 8.00 am. To 12.00 noon failing which a fine of Rs. 5 per day of delay will be charged.",
  "Fees are to be deposited by local cheque/DD. in the school office by the 10th of the month in which they are due.",
  "Pay-in-slip booklet is issued for depositing the fees. The booklet shall be collected by the parents/guardians from the office of the school in the beginning of the academic year, i. e. in April.",
  "Parents should ensure that the Fee Account Number along with class, section and the name of the Student are duly entered in the pay-in-slip and at the back of the cheque in order to avoid inconvenience.",
  "Fees are subject to revision. At the discretion of the Management. Fees are to be paid as long as the name of a child is on the school rolls and for 12 months in an academic year.",
  "The School will not be responsible for payment not credited to the school account due to inadequate/erratic entries in the pay-in-slip or any other reason.",
  "Fees paid cannot be refunded.",
  "Name is struck off the rolls if payment is not received by the third month and re-admission may not be granted. In case the admission is granted (entirely at the discretion of the School authorities) it will be on payment of re-admission fee of Rs.200/and all arrears.",
  "Rs.250/will be charged as handling charges for every cheque returned unpaid and all future payments will be accepted only by 3 Demand Draft in favour of Dev Samaj Modern School No.2.",
  "Parents should please keep Receipts issued by the school office in safe custody for at; least one year.",
  "Caution money is not refunded during holidays. It must be claimed within two years of leaving the school. Thereafter it merges into the School Account and cannot be refunded.",
  "Children withdrawing in April have to pay the installment of Fees due in April.",
];

const fee_concession = [
  "Fee concession is strictly for EWS category as per govt. norms.",
  "Concession is not allowed in any other category.",
];
const Admission = () => {
  return (
    <div className="flex px-4 justify-center flex-col items-center p-2  mt-[180px]  font-bold ">
      {/* Admission */}
      <div className="lg:ml-6 lg:col-start-2 lg:max-w-4xl pt-16">
        <DividerWithText text="Admission" />
        <ul className="mt-8 space-y-3 font-medium">
          {admissionProcess.map((text, index) => (
            <StyledList key={index} text={text} />
          ))}
        </ul>
      </div>
      {/* Withdrawal & Cancellation of Admission */}
      <div className="lg:ml-6 lg:col-start-2 lg:max-w-4xl pt-16">
        <DividerWithText text="Withdrawal & Cancellation of Admission" />
        <ul className="mt-8 space-y-3 font-medium">
          {withdrawal_cancellation.map((text, index) => (
            <StyledList key={index} text={text} />
          ))}
        </ul>
      </div>
      {/* Payments of Dues */}
      <div className="lg:ml-6 lg:col-start-2 lg:max-w-4xl pt-16">
        <DividerWithText text="Payments of Dues" />
        <ul className="mt-8 space-y-3 font-medium">
          {payments.map((text, index) => (
            <StyledList key={index} text={text} />
          ))}
        </ul>
      </div>
      {/* Fee Concession*/}
      <div className="lg:ml-6 lg:col-start-2 lg:max-w-4xl pt-16">
        <DividerWithText text="Fee Concession" />
        <ul className="mt-8 space-y-3 font-medium">
          {fee_concession.map((text, index) => (
            <StyledList key={index} text={text} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admission;
