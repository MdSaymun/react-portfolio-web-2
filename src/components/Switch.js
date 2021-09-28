import { Switch } from "@headlessui/react";

function MyToggle({ enabled, setEnabled }) {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? "bg-blue-400" : "bg-gray-600"} relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span
        className={`transition ease-in-out duration-400 ${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  );
}
export default MyToggle;
