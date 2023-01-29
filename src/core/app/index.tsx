import { Footer } from '$components';
import { Home } from '$pages';
import { FocusLayout, FocusLayoutProvider, StartPopup } from '$widgets';

import classes from './styles.module.scss';

const App = () => (
    <FocusLayoutProvider>
        <div className={classes.app}>
            <main className={classes.main}>
                <Home />
            </main>
            <Footer />
        </div>
        <FocusLayout />
        <StartPopup />
    </FocusLayoutProvider>
);

export default App;
