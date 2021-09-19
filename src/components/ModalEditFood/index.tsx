import { FormHandles } from "@unform/core";
import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { TypeFood } from "../Food";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { Form } from "./styles";

interface ModalEditFoodProps {
  handleUpdateFood: (food: any) => void;
  setIsOpen: () => void;
  isOpen: boolean;
  editingFood: any;
}

export const ModalEditFood: React.FC<ModalEditFoodProps> = ({
  handleUpdateFood,
  isOpen,
  setIsOpen,
  editingFood,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: TypeFood) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};
