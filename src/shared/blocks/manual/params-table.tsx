interface ParamsTableProps {
  params: { key: string; value: string }[];
  note?: string;
}

export function ParamsTable({ params, note }: ParamsTableProps) {
  return (
    <div className="manual-params">
      <table>
        <thead>
          <tr>
            <th>核心维度</th>
            <th>Seedance 2.0</th>
          </tr>
        </thead>
        <tbody>
          {params.map((p, i) => (
            <tr key={i}>
              <td>{p.key}</td>
              <td>{p.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {note && <p className="manual-params__note">{note}</p>}
    </div>
  );
}
