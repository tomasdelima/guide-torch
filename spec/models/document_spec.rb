require 'rails_helper'

RSpec.describe Document, type: :model do
  describe '#as_json' do
    context 'when there is an author' do
      let(:document) { FactoryGirl.create :document }

      it 'returns a JSON' do
        expect(document.as_json[:author]).to be_present
      end
    end

    context 'when there is not an author' do
      let(:document) { FactoryGirl.create :document, :without_author }

      it 'returns a JSON' do
        expect(document.as_json[:author]).not_to be_present
      end
    end
  end
end
