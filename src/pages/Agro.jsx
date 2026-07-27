import DivisionPage from '../components/DivisionPage';
import LandPortfolio from '../components/LandPortfolio';
import GrowthTargets from '../components/GrowthTargets';
import InvestorPaths from '../components/InvestorPaths';

// Agro carries the investor-facing sections: the land position it is built on,
// the targets it reports against, and the routes in.
const Agro = () => (
  <DivisionPage
    slug="agro"
    afterOverview={<LandPortfolio className="bg-sand-2 dark:bg-white/[0.03]" />}
    afterServices={
      <>
        <GrowthTargets />
        <InvestorPaths className="bg-sand dark:bg-ink" />
      </>
    }
  />
);

export default Agro;
