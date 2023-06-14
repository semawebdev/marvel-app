import { features } from '../../constants';

export const FeatureSelect = ({ feature, onChange }) => {
    return (
      <>
        <label htmlFor="feature-select" className="label">Choose a feature:</label>
  
        <select
          name="feature"
          id="feature-select"
          onChange={onChange}
          value={feature}
          className="dropdown"
          data-testid="featureSelect"
        >
          <option value="">Please choose an option</option>
          {Object.entries(features).map(([key, value]) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
      </>
    );
  };