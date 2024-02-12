import UpdateForm from "@/components/edit-form";
import { getContactById } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdateContactPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const contact = await getContactById(id);

  if (!contact) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Update Contact</h1>
      <UpdateForm contact={contact} />
    </div>
  );
};

export default UpdateContactPage;
