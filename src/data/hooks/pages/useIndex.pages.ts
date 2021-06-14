import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";

export default function useIndex() {
  const [cep, setCep] = useState("");
  const cepValido = useMemo(() => {
    return ValidationService.cep(cep);
  }, [cep]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [diaristas, setDiaristas] = useState([] as UserShortInterface[]);
  const [diaristasRestantes, setDiaristasRestantes] = useState(0);

  async function searchEmployees(cep: string) {
    setSearch(false);
    setLoading(true);
    setError("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));
      setDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);
      setSearch(true);
      setLoading(false);
    } catch {
      setError("CEP não encontrado");
      setLoading(false);
    }
  }

  return {
    cep,
    setCep,
    cepValido,
    searchEmployees,
    error,
    diaristas,
    loading,
    search,
    diaristasRestantes,
  };
}
