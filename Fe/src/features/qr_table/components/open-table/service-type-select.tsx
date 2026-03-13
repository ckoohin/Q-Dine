export default function ServiceTypeSelect() {
  return (
    <div>
      <label className="block text-sm font-semibold mb-3">
        Loại hình dịch vụ
      </label>

      <div className="grid grid-cols-2 gap-4">

        <label className="p-4 border-2 border-primary rounded-xl cursor-pointer">
          <input type="radio" name="service" className="hidden"/>

          <div className="text-center">
            <p className="font-bold text-primary">
              À la carte
            </p>
          </div>
        </label>

        <label className="p-4 border rounded-xl cursor-pointer">
          <input type="radio" name="service" className="hidden"/>

          <div className="text-center">
            <p className="font-bold">
              Buffet
            </p>
          </div>
        </label>

      </div>
    </div>
  )
}