import { Context, StoreGroup } from "almin";
import { UserFormContainerStore } from "./container/UserFormContainer/UserFormContainerStore";
import { SearchContainerStore } from "./container/SearchContainer/SearchContainerStore";
import { AlminLogger } from "almin-logger";
import { createContext } from "./AlminContext";

export const AppStoreGroup = new StoreGroup({
    userFormContainer: new UserFormContainerStore(),
    searchContainer: new SearchContainerStore()
});

export const context = new Context({
    store: AppStoreGroup
});

if (process.env.NODE_ENV !== "production") {
    const logger = new AlminLogger();
    logger.startLogging(context);
}

const { Provider, Consumer, Subscribe } = createContext(context);
export { Provider, Consumer, Subscribe };