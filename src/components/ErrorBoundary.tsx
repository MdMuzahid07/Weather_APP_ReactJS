import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught Error in Component:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 backdrop-blur-md flex flex-col items-center justify-center text-center my-2 shrink-0">
          <AlertTriangle size={28} className="mb-2 text-rose-400 animate-pulse" />
          <h4 className="font-bold text-sm text-slate-100 mb-1">
            {this.props.fallbackTitle || 'Widget Failed to Render'}
          </h4>
          <p className="text-xs text-slate-400 mb-3 max-w-md">
            An unexpected rendering issue occurred in this section.
          </p>
          <button
            onClick={this.handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border border-rose-500/40 rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            <RefreshCw size={13} />
            <span>Try Reloading Widget</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
