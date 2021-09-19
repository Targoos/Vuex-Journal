import { createStore } from 'vuex'
import { daybookModule } from '../modules/daybook/store/daybook'

export const store = createStore({
    modules: {
        daybook: daybookModule
    }
})
