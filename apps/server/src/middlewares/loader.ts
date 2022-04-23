import DataLoader from 'dataloader';
import { Model } from 'mongoose';
import { User } from '@schema/User/model';
import { Medication } from '@schema/Medication/model';

// create a dataloader for the given model
export const createLoader = (Model: Model<any>) => {
  // init the dataloader
  const loader = new DataLoader(async (keys) => {
    const data = await Model.find({ _id: { $in: keys } });
    return keys.map((key) => data.find(({ id }) => id == key));
  });

  // return the dataloader loader function
  return {
    load: async (id: unknown) => loader.load(id),
    loadMany: async (ids: ArrayLike<unknown>) => loader.loadMany(ids),
    clear: (id: string) => loader.clear(id),
    clearAll: () => loader.clearAll(),
  };
};

export const dataloader = {
  user: createLoader(User),
  medication: createLoader(Medication),
};
