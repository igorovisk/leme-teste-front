import Api from "../../services/api";

export function useExportPedidosCSV() {
   async function getCSVPedidos(): Promise<string> {
      try {
         const response = await Api.get("/exportPedidos", {
            responseType: "arraybuffer",
         });
         const csvData = new TextDecoder().decode(
            new Uint8Array(response.data)
         );
         return csvData;
      } catch (error) {
         throw error;
      }
   }

   return { getCSVPedidos };
}

export default useExportPedidosCSV;
