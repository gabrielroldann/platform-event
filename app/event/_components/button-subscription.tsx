"use client";

import {
  CheckSubscription,
  SaveSubscription,
} from "@/app/_actions/save-subscription";
import { Button } from "@/app/_components/ui/button";
import { Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ButtonSubscriptionProps {
  id: string;
  userId: string;
}

const ButtonSubscription = ({ id, userId }: ButtonSubscriptionProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubscription = async () => {
    const check = await CheckSubscription({
      userId: userId,
      eventId: id,
    });

    if (check) {
      return toast.error("Você já está inscrito neste evento");
    }
    try {
      setLoading(true);
      await SaveSubscription({
        userId: userId,
        eventId: id,
        date: new Date(),
      });

      return toast.success("Inscrição realizada com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao salvar inscrição");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        disabled={loading}
        className="text-base font-normal"
        onClick={handleSubscription}
      >
        {loading ? (
          <Loader size={20} className="animate-spin" />
        ) : (
          "Inscrever-se"
        )}
      </Button>
    </>
  );
};

export default ButtonSubscription;
