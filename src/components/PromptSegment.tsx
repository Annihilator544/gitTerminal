interface PromptSegmentProps {
  text: string;
  bg: string;
  start?: boolean;
  fg: string;
}

function PromptSegment({ text, bg, fg = "white", start = false }: PromptSegmentProps) {
  return (
      start ? (
        <>
          <span
            className="px-3 rounded-l-full"
            style={{ backgroundColor: bg, color: fg }}
          >
            {text}
      </span>
      <div className="w-0 h-0 border-t-[14px] border-b-[14px] border-l-[14px] border-t-transparent border-b-transparent" style={{ borderLeftColor: bg }}></div>
      </>
      )
    :(
       <div className="flex -translate-x-[14px]">
       <div className="w-0 h-0 border-t-[14px] border-b-[14px] border-l-[14px] border-l-transparent" style={{ borderTopColor: bg, borderBottomColor: bg }}></div>
          <span
            className="px-3"
            style={{ backgroundColor: bg, color: fg }}
          >
            {text}
      </span>
      <div className="w-0 h-0 border-t-[14px] border-b-[14px] border-l-[14px] border-t-transparent border-b-transparent" style={{ borderLeftColor: bg }}></div>
      </div>
    )
  );
}

export default PromptSegment;