import { Settings, FileCode, Search, Copy } from 'lucide-react'; // Icons
import VSeditor from './editor/VisualStudioEditor';

export default function VisualStudio(){
    return (
    <div className="flex h-[765px] mx-[5rem] my-4 flex-col bg-[#1e1e1e] text-[#cccccc] font-sans overflow-hidden rounded-xl">
      <div className="flex h-9 w-full items-center bg-[#3c3c3c] px-3 text-sm space-x-4 border-b border-[#2b2b2b]">
        <span>File</span><span>Edit</span><span>View</span><span>Project</span><span>Build</span>
        <div className="flex-grow text-center text-xs text-gray-400">webapp - Microsoft Visual Studio</div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex w-12 flex-col items-center py-4 space-y-6 bg-[#333333]">
          <FileCode size={24} className="text-white cursor-pointer" />
          <Search size={24} className="hover:text-white cursor-pointer" />
          <Copy size={24} className="hover:text-white cursor-pointer" />
          <div className="flex-grow" />
          <Settings size={24} className="hover:text-white cursor-pointer" />
        </div>
        <div className="w-64 border-r border-[#2b2b2b] bg-[#252526] flex flex-col">
          <div className="p-2 text-xs font-bold uppercase tracking-wider">Solution Explorer</div>
          <div className="p-4 text-sm space-y-1">
            <div className="flex items-center text-blue-400">▼ webapp</div>
            <div className="pl-4">📁 Models</div>
            <div className="pl-8 text-white bg-[#37373d]">Gabriel.java</div>
            <div className="pl-4">📁 Controllers</div>
            <div className="pl-4">📁 Views</div>
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-[#1e1e1e]">
          <div className="flex h-9 bg-[#2d2d2d]">
            <div className="flex items-center px-4 bg-[#1e1e1e] border-t border-t-blue-500 text-sm">
              Gabriel.java <span className="ml-2 text-xs text-gray-500">x</span>
            </div>
            <div className="flex items-center px-4 text-sm text-gray-500 border-r border-[#1e1e1e]">
              Main.java
            </div>
          </div>
          <div className="flex-1 p-4 font-mono text-sm overflow-auto">
            {/* Lord, I'm sorry for this code */}
            <VSeditor />            
          </div>
        </div>
        <div className="w-64 border-l border-[#2b2b2b] bg-[#252526]">
          <div className="p-2 text-xs font-bold border-b border-[#3c3c3c]">Properties</div>
        </div>
      </div>
      <div className="flex h-6 w-full items-center justify-between bg-[#007acc] px-3 text-[11px] text-white">
        <div className="flex items-center space-x-4">
          <span>Ready</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Ln 31, Ch 56</span>
          <span>UTF-8</span>
          <span>CRLF</span>
        </div>
      </div>
    </div>
  );
}