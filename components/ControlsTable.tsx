import type { ControlRow } from "@/lib/game-content";

interface ControlsTableProps {
  label: string;
  rows: readonly ControlRow[];
}

export default function ControlsTable({ label, rows }: ControlsTableProps) {
  return (
    <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{label}</caption>
        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
          <tr>
            <th scope="col" className="px-4 py-3 font-bold">
              Action
            </th>
            <th scope="col" className="px-4 py-3 font-bold">
              Keys
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {rows.map(([action, keys]) => (
            <tr key={action}>
              <th scope="row" className="px-4 py-3 font-semibold text-slate-700">
                {action}
              </th>
              <td className="px-4 py-3">
                <kbd className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-xs font-bold text-ink">
                  {keys}
                </kbd>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
