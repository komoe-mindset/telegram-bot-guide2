import React, { useState, useEffect, useCallback, useRef } from 'react';
import { modules } from './data/courseData';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ModuleFooter } from './components/ModuleFooter';
import { Overview } from './pages/Overview';
import { Requirements } from './pages/Requirements';
import { Basics } from './pages/Basics';
import { Setup } from './pages/Setup';
import { Playground } from './pages/Playground';
import { Downloader } from './pages/Downloader';
import { Troubleshoot } from './pages/Troubleshoot';
import { Skills } from './pages/Skills';
import { Resources } from './pages/Resources';

const readStorage = <T,>(key: string, fallback: T): T => {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch {
    return fallback;
  }
};

export const App: React.FC = () => {
  const getHashPage = (): string => {
    const h = window.location.hash.slice(1).split('?')[0];
    const valid = ['overview', 'requirements', 'basics', 'setup', 'playground', 'downloader', 'troubleshoot', 'skills', 'resources'];
    return valid.includes(h) ? h : 'overview';
  };

  const [currentPage, setCurrentPage] = useState<string>(getHashPage());
  const [completed, setCompleted] = useState<Set<string>>(() => {
    const stored = readStorage<string[]>('mingalar-completed-v1', []);
    return new Set(stored.filter((id) => modules.some((m) => m.id === id)));
  });
  const [readiness, setReadiness] = useState<Record<string, boolean>>(() => {
    const stored = readStorage<Record<string, boolean>>('mingalar-readiness-v1', {});
    return stored && typeof stored === 'object' && !Array.isArray(stored) ? stored : {};
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = useCallback((msg: string) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToastMessage(msg);
    setToastVisible(true);
    toastTimerRef.current = window.setTimeout(() => {
      setToastVisible(false);
    }, 2600);
  }, []);

  const navigateTo = useCallback((pageId: string) => {
    window.location.hash = pageId;
    setCurrentPage(pageId);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    const mainEl = document.getElementById('main');
    if (mainEl) {
      mainEl.focus({ preventScroll: true });
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const page = getHashPage();
      setCurrentPage(page);
      setSidebarOpen(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const currentModule = modules.find((m) => m.id === currentPage);
    const title = currentModule ? currentModule.name : 'အရင်းအမြစ်များ';
    document.title = `${title} · Mingalar Bot Lab`;
  }, [currentPage]);

  useEffect(() => {
    try {
      localStorage.setItem('mingalar-completed-v1', JSON.stringify([...completed]));
    } catch {
      // ignore
    }
  }, [completed]);

  useEffect(() => {
    try {
      localStorage.setItem('mingalar-readiness-v1', JSON.stringify(readiness));
    } catch {
      // ignore
    }
  }, [readiness]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleComplete = () => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(currentPage)) {
        next.delete(currentPage);
        showToast('ပြီးဆုံးမှု အမှတ်အသားကို ပြန်ဖြုတ်ပြီးပါပြီ။');
      } else {
        next.add(currentPage);
        showToast('သင့်လေ့လာမှုကို မှတ်ထားပြီးပါပြီ။');
      }
      return next;
    });
  };

  const handleToggleReadiness = (id: string, checked: boolean) => {
    setReadiness((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'overview':
        return <Overview onNavigate={navigateTo} />;
      case 'requirements':
        return (
          <Requirements
            readiness={readiness}
            onToggleReadiness={handleToggleReadiness}
            onNavigate={navigateTo}
          />
        );
      case 'basics':
        return <Basics onNotify={showToast} />;
      case 'setup':
        return <Setup onNavigate={navigateTo} onNotify={showToast} />;
      case 'playground':
        return <Playground onNavigate={navigateTo} onNotify={showToast} />;
      case 'downloader':
        return <Downloader onNotify={showToast} />;
      case 'troubleshoot':
        return <Troubleshoot onNotify={showToast} />;
      case 'skills':
        return <Skills onNotify={showToast} />;
      case 'resources':
        return <Resources onNotify={showToast} />;
      default:
        return <Overview onNavigate={navigateTo} />;
    }
  };

  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('main')?.focus();
        }}
      >
        သင်ခန်းစာသို့ ကျော်သွားမယ်
      </a>

      <Sidebar
        currentPage={currentPage}
        completed={completed}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={navigateTo}
      />

      <div className="workspace">
        <Topbar
          currentPage={currentPage}
          isSidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />

        <main id="main" tabIndex={-1}>
          {renderCurrentPage()}
          <ModuleFooter
            currentPage={currentPage}
            isCompleted={completed.has(currentPage)}
            onToggleComplete={handleToggleComplete}
            onNavigate={navigateTo}
          />
        </main>

        <Footer />
      </div>

      <Toast message={toastMessage} visible={toastVisible} />
    </>
  );
};
