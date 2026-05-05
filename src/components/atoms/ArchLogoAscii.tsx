export default function ArchLogo() {
  const blue = "#1793d1";
  const lightBlue = "#7ea7bb";

  return (
    <div className="p-5 rounded-lg inline-block">
      <pre 
        style={{
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          lineHeight: '1.1',
          fontSize: '14px',
          color: lightBlue,
          whiteSpace: 'pre',
          margin: 0,
        }}
      >
{`                  `} <span style={{ color: blue }}>-`</span> {`
                 `} <span style={{ color: blue }}>.o+`</span> {`
                `} <span style={{ color: blue }}>`ooo/</span> {`
               `} <span style={{ color: blue }}>`+oooo:</span> {`
              `} <span style={{ color: blue }}>`+oooooo:</span> {`
              `} <span style={{ color: blue }}>-+oooooo+:</span> {`
            `} <span style={{ color: blue }}>`/:-:++oooo+:</span> {`
           `} <span style={{ color: blue }}>`/++++/+++++++:</span> {`
          `} <span style={{ color: blue }}>`/++++++++++++++:</span> {`
         `} <span style={{ color: blue }}>`/+++o</span><span>oooooooo</span><span style={{ color: blue }}>oooo/`</span> {`
        `} <span style={{ color: blue }}>./</span><span>ooosssso++osssssso</span><span style={{ color: blue }}>+`</span> {`
       `} <span>.oossssso-````/ossssss+`</span> {`
      `} <span>-osssssso.      :ssssssso.</span> {`
     `} <span>:osssssss/        osssso+++.</span> {`
    `} <span>/ossssssss/        +ssssooo/-</span> {`
  `} <span style={{ color: lightBlue }}>`/ossssso+/:-        -:/+osssso+-</span> {`
 `} <span style={{ color: lightBlue }}>`+sso+:-`                `.-/+oso:</span> {`
`} <span style={{ color: lightBlue }}>`++:.                            `-/+/</span> {`
`} <span style={{ color: lightBlue }}>.`                                 `/</span>
      </pre>
    </div>
  );
}
// god, I'm sorry for this code