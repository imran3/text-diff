import { useState } from 'react';
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer-continued';
import { ArrowLeftRight, Trash2, CheckCircle2 } from 'lucide-react';

const App = () => {
  const [oldCode, setOldCode] = useState('');
  const [newCode, setNewCode] = useState('');
  const [showDiff, setShowDiff] = useState(false);

  const handleCompare = () => {
    if (oldCode.trim() || newCode.trim()) setShowDiff(true);
  };

  const handleSwitch = () => {
    const temp = oldCode;
    setOldCode(newCode);
    setNewCode(temp);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] px-6 pb-20 font-sans text-slate-800 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1800px]">
        {/* 1. TOP SECTION: Diff Result */}
        {showDiff && (
          <section className="pt-10">
            <div className="animate-in fade-in slide-in-from-top-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl duration-500">
              <div className="flex items-center justify-between border-b bg-slate-50 px-6 py-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span className="text-sm font-bold tracking-tight text-slate-700">
                    Changes Detected
                  </span>
                </div>
              </div>
              <div className="w-full overflow-x-auto">
                <ReactDiffViewer
                  oldValue={oldCode}
                  newValue={newCode}
                  splitView={true}
                  compareMethod={DiffMethod.WORDS}
                  styles={{
                    variables: {
                      light: {
                        diffViewerBackground: '#fff',
                        addedBackground: '#ecfdf5',
                        removedBackground: '#fef2f2',
                        wordAddedBackground: '#d1fae5',
                        wordRemovedBackground: '#fee2e2',
                      },
                    },
                    contentText: {
                      fontSize: '13px',
                      lineHeight: '22px',
                      fontFamily: '"JetBrains Mono", Menlo, monospace',
                    },
                  }}
                />
              </div>
            </div>
          </section>
        )}

        {/* 2. MIDDLE SECTION: Controls */}
        <div className="flex items-center justify-center gap-4 py-10">
          <button
            onClick={handleSwitch}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-xs font-bold text-slate-600 shadow-sm transition-all hover:bg-slate-50 active:scale-95"
          >
            <ArrowLeftRight size={14} /> Switch
          </button>

          <button
            onClick={handleCompare}
            className="flex items-center gap-2 rounded-xl bg-[#10b981] px-16 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-[#059669] active:scale-95"
          >
            Compare!
          </button>

          <button
            onClick={() => {
              setOldCode('');
              setNewCode('');
              setShowDiff(false);
            }}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-xs font-bold text-red-500 shadow-sm transition-all hover:bg-red-50 active:scale-95"
          >
            <Trash2 size={14} /> Clear
          </button>
        </div>

        {/* 3. BOTTOM SECTION: Input Areas */}
        <section className="grid grid-cols-2 gap-10">
          {/* Original Input Area */}
          <div className="space-y-3">
            <div className="flex flex-col px-1">
              <label className="text-[11px] font-black tracking-widest text-slate-400 uppercase">
                Original Base
              </label>
              <span className="font-mono text-[10px] text-slate-300">
                {oldCode.length.toLocaleString()} chars
              </span>
            </div>
            <textarea
              className="h-[550px] w-full resize-none rounded-2xl border border-slate-200 bg-white p-8 font-mono text-sm leading-relaxed shadow-sm transition-all outline-none focus:border-b-4 focus:border-r-slate-200 focus:border-b-sky-500 focus:border-b-slate-200 focus:border-l-slate-200"
              value={oldCode}
              onChange={(e) => {
                setOldCode(e.target.value);
                if (showDiff) setShowDiff(false);
              }}
              placeholder="Enter original text..."
            />
          </div>

          {/* Modified Input Area */}
          <div className="space-y-3">
            <div className="flex flex-col px-1">
              <label className="text-[11px] font-black tracking-widest text-slate-400 uppercase">
                Modified Version
              </label>
              <span className="font-mono text-[10px] text-slate-300">
                {newCode.length.toLocaleString()} chars
              </span>
            </div>
            <textarea
              className="h-[550px] w-full resize-none rounded-2xl border border-slate-200 bg-white p-8 font-mono text-sm leading-relaxed shadow-sm transition-all outline-none focus:border-b-4 focus:border-r-slate-200 focus:border-b-sky-500 focus:border-b-slate-200 focus:border-l-slate-200"
              value={newCode}
              onChange={(e) => {
                setNewCode(e.target.value);
                if (showDiff) setShowDiff(false);
              }}
              placeholder="Enter modified text..."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
